import { Wifi } from '@prisma/client';
import AppError from './AppError.js';

export const verifyIfWifiIsForUser = (wifi: Wifi, userId: number) => {
  if (wifi.userId !== userId) {
    throw new AppError('Wifi not found', 404);
  }
};
