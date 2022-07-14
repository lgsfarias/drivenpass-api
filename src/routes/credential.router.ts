import { Router } from 'express';
import {
  createCredential,
  getAllUserCredentials,
} from '../controllers/credential.controller.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import verifiTokenMiddleware from '../middlewares/verifyTokenMiddleware.js';
import * as schemas from '../schemas/index.js';

const credentialRouter = Router();

credentialRouter.post(
  '/',
  verifiTokenMiddleware,
  validateSchemaMiddleware(schemas.credential),
  createCredential,
);

credentialRouter.get('/', verifiTokenMiddleware, getAllUserCredentials);

export default credentialRouter;
