import AppError from '../utils/AppError.js';
import * as wifiRepository from '../repositories/wifi.repository.js';

export const create = async (createWifiData: wifiRepository.CreateWifiData) => {
  const wifi = await wifiRepository.create(createWifiData);
  return wifi;
};

export const findAllByUserId = async (userId: number) => {
  const wifis = await wifiRepository.findAllByUserId(userId);
  return wifis;
};

export const findById = async (id: number) => {
  const wifi = await wifiRepository.findById(id);
  if (!wifi) {
    throw new AppError('Wifi not found', 404);
  }
  return wifi;
};

export const deleteWifi = async (id: number) => {
  const wifi = await wifiRepository.deleteWifi(id);
  return wifi;
};
