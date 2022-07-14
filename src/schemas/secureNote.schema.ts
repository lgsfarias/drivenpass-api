import Joi from 'joi';
import { CreateSecureNoteData } from '../repositories/secureNote.repository.js';

const secureNoteSchema = Joi.object<Omit<CreateSecureNoteData, 'userId'>>({
  label: Joi.string().max(50).required(),
  content: Joi.string().max(1000).required(),
}).required();

export default secureNoteSchema;
