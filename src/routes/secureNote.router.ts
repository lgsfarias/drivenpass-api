import { Router } from 'express';
import {
  createSecureNote,
  getAllUsersSecureNotes,
  deleteSecureNote,
} from '../controllers/secureNote.controller.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import verifiTokenMiddleware from '../middlewares/verifyTokenMiddleware.js';
import * as schemas from '../schemas/index.js';

const secureNoteRouter = Router();

secureNoteRouter.post(
  '/',
  verifiTokenMiddleware,
  validateSchemaMiddleware(schemas.secureNote),
  createSecureNote,
);
secureNoteRouter.get('/', verifiTokenMiddleware, getAllUsersSecureNotes);
secureNoteRouter.delete('/:id', verifiTokenMiddleware, deleteSecureNote);

export default secureNoteRouter;
