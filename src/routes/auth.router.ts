import { Router } from 'express';
import { signup } from '../controllers/auth.controller.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import signupSchema from '../schemas/signup.schema.js';

const authRouter = Router();

authRouter.post('/signup', validateSchemaMiddleware(signupSchema), signup);

export default authRouter;
