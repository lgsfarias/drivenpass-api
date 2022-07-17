import { Router } from 'express';
import {
  createDocument,
  getAllUsersDocuments,
  getDocumentById,
  deleteDocument,
} from '../controllers/document.controller.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import verifiTokenMiddleware from '../middlewares/verifyTokenMiddleware.js';
import * as schemas from '../schemas/index.js';

const documentRouter = Router();

documentRouter.post(
  '/',
  verifiTokenMiddleware,
  validateSchemaMiddleware(schemas.document),
  createDocument,
);
documentRouter.get('/', verifiTokenMiddleware, getAllUsersDocuments);
documentRouter.get('/:id', verifiTokenMiddleware, getDocumentById);
documentRouter.delete('/:id', verifiTokenMiddleware, deleteDocument);

export default documentRouter;
