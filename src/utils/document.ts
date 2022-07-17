import { Document } from '@prisma/client';
import AppError from './AppError.js';

export const verifyIfDocumentIsForUser = (
  document: Document,
  userId: number,
) => {
  if (document.userId !== userId) {
    throw new AppError('Document not found', 404);
  }
};
