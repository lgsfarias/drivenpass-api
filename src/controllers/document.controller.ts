import { Request, Response } from 'express';
import * as documentService from '../services/document.service.js';
import { verifyIfDocumentIsForUser } from '../utils/document.js';

export const createDocument = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const { type, name, number, expirationDate, issueDate, issuer } = req.body;
  await documentService.verifyIfTypeAlreadyExists(type, user.id);
  const document = await documentService.create({
    userId: user.id,
    type,
    name,
    number,
    expirationDate,
    issueDate,
    issuer,
  });
  res.status(201).json(document);
};

export const getAllUsersDocuments = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const documents = await documentService.findAllByUserId(user.id);
  res.status(200).json(documents);
};

export const getDocumentById = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const document = await documentService.findById(id);
  verifyIfDocumentIsForUser(document, user.id);
  res.status(200).json(document);
};

export const deleteDocument = async (req: Request, res: Response) => {
  const { user } = res.locals;
  const id = +req.params.id;
  const card = await documentService.findById(id);
  verifyIfDocumentIsForUser(card, user.id);
  await documentService.deleteDocument(id);
  res.status(204).send();
};
