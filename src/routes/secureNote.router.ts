import { Router } from 'express';
import {
  create,
  getAllUsersSecureNotes,
} from '../controllers/secureNote.controller.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import verifiTokenMiddleware from '../middlewares/verifyTokenMiddleware.js';
import * as schemas from '../schemas/index.js';

const secureNoteRouter = Router();

secureNoteRouter.post(
  '/',
  verifiTokenMiddleware,
  validateSchemaMiddleware(schemas.secureNote),
  create,
);
secureNoteRouter.get('/', verifiTokenMiddleware, getAllUsersSecureNotes);

export default secureNoteRouter;
