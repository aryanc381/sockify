import express from 'express';
import signupRouter from './controllers/signup.js';
import loginRouter from './controllers/login.js';
import adminRouter from './app/admin.js';

const router = express.Router();

router.use('/auth/signup', signupRouter);
router.use('/auth/login', loginRouter);

router.use('/app', adminRouter);

export default router;