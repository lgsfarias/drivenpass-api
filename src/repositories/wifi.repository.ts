import { Wifi } from '@prisma/client';
import prisma from '../config/database.js';

export type CreateWifiData = Omit<Wifi, 'id' | 'createdAt'>;

export const create = async (createWifiData: CreateWifiData) => {
  const wifi = await prisma.wifi.create({
    data: createWifiData,
  });
  return wifi;
};

export const findByLabelAndUserId = async (label: string, userId: number) => {
  const wifi = await prisma.wifi.findFirst({
    where: {
      label,
      userId,
    },
  });
  return wifi;
};

export const findAllByUserId = async (userId: number) => {
  const wifis = await prisma.wifi.findMany({
    where: {
      userId,
    },
  });
  return wifis;
};

export const findById = async (id: number) => {
  const wifi = await prisma.wifi.findUnique({
    where: {
      id,
    },
  });
  return wifi;
};

export const deleteWifi = async (id: number) => {
  const wifi = await prisma.wifi.delete({
    where: {
      id,
    },
  });
  return wifi;
};
