import { Router } from 'express';
import {
  createCard,
  getAllUsersCards,
  getCardById,
  deleteCard,
} from '../controllers/card.controller.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import verifiTokenMiddleware from '../middlewares/verifyTokenMiddleware.js';
import * as schemas from '../schemas/index.js';

const cardRouter = Router();

cardRouter.post(
  '/',
  verifiTokenMiddleware,
  validateSchemaMiddleware(schemas.card),
  createCard,
);
cardRouter.get('/', verifiTokenMiddleware, getAllUsersCards);
cardRouter.get('/:id', verifiTokenMiddleware, getCardById);
cardRouter.delete('/:id', verifiTokenMiddleware, deleteCard);

export default cardRouter;
