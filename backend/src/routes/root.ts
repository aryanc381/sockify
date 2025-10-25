import express from 'express';
import signupRouter from './controllers/signup.js';
import loginRouter from './controllers/login.js';

const router = express.Router();

router.use('/auth/', signupRouter, loginRouter);

export default router;