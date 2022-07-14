import { Request, Response } from 'express';
import * as credentialService from '../services/credential.service.js';
import * as credentialUtils from '../utils/credential.js';

export const createCredential = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const { label, url, username, password } = req.body;
  await credentialService.verifyIfLabelAlreadyExists(label, user.id);
  const encryptedPassword = credentialUtils.encryptPassword(password);
  const credential = await credentialService.create({
    userId: user.id,
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
      password: credentialUtils.decryptPassword(credential.password),
    })),
  );
};

export const getCredentialById = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const credential = await credentialService.findById(id);
  credentialUtils.verifyIfCredentialIsForUser(credential, user.id);
  res.status(200).json({
    ...credential,
    password: credentialUtils.decryptPassword(credential.password),
  });
};

export const deleteCredential = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const credential = await credentialService.findById(id);
  credentialUtils.verifyIfCredentialIsForUser(credential, user.id);
  await credentialService.deleteCredential(id);
  res.status(204).send();
};
