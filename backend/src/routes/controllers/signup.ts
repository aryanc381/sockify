import express from 'express';
import zod from 'zod';
import users from '../../models/db.js';

const router = express.Router();
router.use(express.json());

const signupBody = zod.object({
    name: zod.string(),
    username: zod.string(),
    password: zod.string()
});

router.post('/signup', async (req, res) => {
    try {
        const parsed = signupBody.safeParse(req.body);
        console.log(parsed);
        if(!parsed.success) {
            const formattedErrors = parsed.error.issues.map((error) => ({
                path: error.path[0],
                msg: error.message
            }));
            return res.status(200).json({
                status: 401,
                msg: formattedErrors
            });
        } else {
            const existingUser = await users.findOne({ 'userDetails.username': req.body.username });
            console.log(existingUser);
            if(existingUser) {
                return res.status(200).json({
                    status: 409,
                    msg: 'User already exists, Login instead.' 
                });
            } else {
                const user = await users.create({
                    userDetails: {
                       name: req.body.name,
                        username: req.body.username,
                        password: req.body.password 
                    }
                });
                console.log(user);
                return res.status(200).json({
                    status: 200,
                    msg: `User ${user.userDetails.name} created successfully, Onboarding...`
                });
            }
        }  
    } catch(err) {
        return res.status(200).json({
            status: 520,
            msg: 'Unknown Error Occured.'
        });
    }
    
});

export default router;