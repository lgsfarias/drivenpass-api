import { Router } from 'express';
import { create } from '../controllers/secureNote.controller.js';
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

export default secureNoteRouter;
