import { Router } from 'express';
import {
  createWifi,
  getAllUsersWifis,
  getWifiById,
  deleteWifi,
} from '../controllers/wifi.controller.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import verifiTokenMiddleware from '../middlewares/verifyTokenMiddleware.js';
import * as schemas from '../schemas/index.js';

const wifiRouter = Router();

wifiRouter.post(
  '/',
  verifiTokenMiddleware,
  validateSchemaMiddleware(schemas.wifi),
  createWifi,
);
wifiRouter.get('/', verifiTokenMiddleware, getAllUsersWifis);
wifiRouter.get('/:id', verifiTokenMiddleware, getWifiById);
wifiRouter.delete('/:id', verifiTokenMiddleware, deleteWifi);

export default wifiRouter;
