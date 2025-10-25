import express from 'express';
import zod from 'zod';
import users from '../../models/db.js';

const router = express.Router();
router.use(express.json());

const loginBody = zod.object({
    username: zod.string(),
    password: zod.string()
});

router.post('/login', async (req, res) => {
    try {
        const parsed = loginBody.safeParse(req.body);
        if(!parsed.success) {
            const formattedErrors = parsed.error.issues.map((err) => ({
                path: err.path[1],
                message: err.message
            }));
            return res.status(200).json({
                status: 403,
                msg: 'Invalid Credentials',
                errors: formattedErrors
            });
        } else {
            const existingUser = await users.findOne({ 'userDetails.username' : req.body.username, 'userDetails.password' : req.body.password });
            if(!existingUser) {
                return res.status(200).json({
                    status: 404,
                    msg: 'User not found, please check username / password.'
                });
            }

            return res.status(200).json({
                status: 200,
                msg: 'Correct Credentials, opening app...'
            });
        }
    } catch(err) {
        return res.status(200).json({
            status: 500,
            msg: 'Internal Server Error.'
        })
    }
    
})

export default router;