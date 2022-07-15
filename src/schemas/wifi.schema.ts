import Joi from 'joi';
import { CreateWifiData } from '../repositories/wifi.repository.js';

const wifiSchema = Joi.object<Omit<CreateWifiData, 'userId'>>({
  label: Joi.string().required(),
  ssid: Joi.string().required(),
  password: Joi.string().required(),
}).required();

export default wifiSchema;
