import { Request, Response } from 'express';
import * as wifiService from '../services/wifi.service.js';
import { verifyIfWifiIsForUser } from '../utils/wifi.js';
import { encryptPassword, decryptPassword } from '../utils/credential.js';

export const createWifi = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const { label, ssid, password } = req.body;
  const encryptedPassword = encryptPassword(password);
  const wifi = await wifiService.create({
    userId: user.id,
    label,
    ssid,
    password: encryptedPassword,
  });
  res.status(201).json({ ...wifi, password });
};

export const getAllUsersWifis = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const wifis = await wifiService.findAllByUserId(user.id);
  res.status(200).json(
    wifis.map((wifi) => ({
      ...wifi,
      password: decryptPassword(wifi.password),
    })),
  );
};

export const getWifiById = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const wifi = await wifiService.findById(id);
  verifyIfWifiIsForUser(wifi, user.id);
  res.status(200).json({
    ...wifi,
    password: decryptPassword(wifi.password),
  });
};

export const deleteWifi = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const wifi = await wifiService.findById(id);
  verifyIfWifiIsForUser(wifi, user.id);
  await wifiService.deleteWifi(id);
  res.status(204).send();
};
