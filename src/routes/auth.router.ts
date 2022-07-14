import { Router } from 'express';
import { signup, signin } from '../controllers/auth.controller.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import * as schemas from '../schemas/index.js';

const authRouter = Router();

authRouter.post('/signup', validateSchemaMiddleware(schemas.signup), signup);
authRouter.post('/signin', validateSchemaMiddleware(schemas.signin), signin);

export default authRouter;
