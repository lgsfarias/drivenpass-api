import Joi from 'joi';
import { CreateCardData } from '../repositories/card.repository.js';

const cardSchema = Joi.object<Omit<CreateCardData, 'userId'>>({
  label: Joi.string().required(),
  number: Joi.string().required(),
  name: Joi.string().required(),
  securityCode: Joi.string().required(),
  expiryDate: Joi.string().required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid('credit', 'debit', 'both').required(),
}).required();

export default cardSchema;
