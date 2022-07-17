import AppError from '../utils/AppError.js';
import { DocumentType } from '@prisma/client';
import * as documentRepository from '../repositories/document.repository.js';

export const create = async (
  createDocumentData: documentRepository.CreateDocumentData,
) => {
  const document = await documentRepository.create(createDocumentData);
  return document;
};

export const findAllByUserId = async (userId: number) => {
  const documents = await documentRepository.findAllByUserId(userId);
  return documents;
};

export const findById = async (id: number) => {
  const document = await documentRepository.findById(id);
  if (!document) {
    throw new AppError('Document not found', 404);
  }
  return document;
};

export const verifyIfTypeAlreadyExists = async (
  type: DocumentType,
  userId: number,
) => {
  const document = await documentRepository.findByTypeAndUserId(type, userId);
  if (document) {
    throw new AppError('Type already exists', 400);
  }
};

export const deleteDocument = async (id: number) => {
  const document = await documentRepository.deleteDocument(id);
  return document;
};
