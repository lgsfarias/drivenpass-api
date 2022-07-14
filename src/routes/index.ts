import { Router } from 'express';
import authRouter from './auth.router.js';
import credentialRouter from './credential.router.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/credential', credentialRouter);

export default router;
