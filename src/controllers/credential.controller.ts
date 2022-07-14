import { Request, Response } from 'express';
import * as credentialService from '../services/credential.service.js';
import { decryptPassword, encryptPassword } from '../utils/credential.js';

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

export const getAllUserCredentials = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const credentials = await credentialService.findAllByUserId(user.id);

  res.status(200).json(
    credentials.map((credential) => ({
      ...credential,
      password: decryptPassword(credential.password),
    })),
  );
};
