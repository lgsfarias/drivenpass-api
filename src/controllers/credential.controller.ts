import { Request, Response } from 'express';
import * as credentialService from '../services/credential.service.js';
import { encryptPassword } from '../utils/auth.js';

export const createCredential = async (req: Request, res: Response) => {
  const { userId, label, url, username, password } = req.body;
  await credentialService.verifyIfLabelAlreadyExists(label, userId);
  const encryptedPassword = encryptPassword(password);
  const credential = await credentialService.create({
    userId,
    label,
    url,
    username,
    password: encryptedPassword,
  });
  res.status(201).json({ ...credential, password });
};
