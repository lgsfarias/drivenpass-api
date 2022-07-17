import { Document, DocumentType } from '@prisma/client';
import prisma from '../config/database.js';

export type CreateDocumentData = Omit<Document, 'id' | 'createdAt'>;

export const create = async (createDocumentData: CreateDocumentData) => {
  const document = await prisma.document.create({
    data: createDocumentData,
  });
  return document;
};

export const findByTypeAndUserId = async (
  type: DocumentType,
  userId: number,
) => {
  const document = await prisma.document.findFirst({
    where: {
      type,
      userId,
    },
  });
  return document;
};

export const findAllByUserId = async (userId: number) => {
  const documents = await prisma.document.findMany({
    where: {
      userId,
    },
  });
  return documents;
};

export const findById = async (id: number) => {
  const document = await prisma.document.findUnique({
    where: {
      id,
    },
  });
  return document;
};

export const deleteDocument = async (id: number) => {
  const document = await prisma.document.delete({
    where: {
      id,
    },
  });
  return document;
};
