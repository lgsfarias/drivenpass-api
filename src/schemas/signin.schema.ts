import Joi from 'joi';

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
}).required();

export default signinSchema;
