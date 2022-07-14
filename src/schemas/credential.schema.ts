import Joi from 'joi';
import { CreateCredentialData } from '../repositories/credential.repository';

const credentialSchema = Joi.object<CreateCredentialData>({
  userId: Joi.number().integer().positive().required(),
  url: Joi.string().uri().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  label: Joi.string().required(),
}).required();

export default credentialSchema;
