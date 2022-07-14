import { Request, Response } from 'express';
import * as cardService from '../services/card.service.js';
import { verifyIfCardIsForUser } from '../utils/card.js';
import { encryptPassword } from '../utils/credential.js';

export const createCard = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const {
    label,
    number,
    name,
    securityCode,
    expiryDate,
    password,
    isVirtual,
    type,
  } = req.body;
  await cardService.verifyIfLabelAlreadyExists(label, user.id);
  const encryptedSecurityCode = encryptPassword(securityCode);
  const encryptedPassword = encryptPassword(password);
  const card = await cardService.create({
    userId: user.id,
    label,
    number,
    name,
    securityCode: encryptedSecurityCode,
    expiryDate,
    password: encryptedPassword,
    isVirtual,
    type,
  });
  res.status(201).json({ ...card, securityCode, password });
};

export const getAllUsersCards = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const cards = await cardService.findAllByUserId(user.id);
  res.status(200).json(
    cards.map((card) => ({
      ...card,
      securityCode: encryptPassword(card.securityCode),
      password: encryptPassword(card.password),
    })),
  );
};

export const getCardById = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const card = await cardService.findById(id);
  verifyIfCardIsForUser(card, user.id);
  res.status(200).json({
    ...card,
    securityCode: encryptPassword(card.securityCode),
    password: encryptPassword(card.password),
  });
};

export const deleteCard = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const card = await cardService.findById(id);
  verifyIfCardIsForUser(card, user.id);
  await cardService.deleteCard(id);
  res.status(204).send();
};
