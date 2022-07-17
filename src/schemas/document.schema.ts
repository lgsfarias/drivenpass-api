import Joi from 'joi';
import { CreateDocumentData } from '../repositories/document.repository.js';

const documentSchema = Joi.object<Omit<CreateDocumentData, 'userId'>>({
  type: Joi.string().valid('RG', 'CNH').required(),
  number: Joi.string().required(),
  name: Joi.string().required(),
  expirationDate: Joi.string().required(),
  issueDate: Joi.string().required(),
  issuer: Joi.string().required(),
}).required();

export default documentSchema;
