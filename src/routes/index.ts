import { Router } from 'express';
import authRouter from './auth.router.js';
import credentialRouter from './credential.router.js';
import secureNoteRouter from './secureNote.router.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/credential', credentialRouter);
router.use('/note', secureNoteRouter);

export default router;
