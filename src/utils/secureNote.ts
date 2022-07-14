import { SecureNote } from '@prisma/client';
import AppError from '../utils/AppError.js';

export const verifyIfSecureNoteIsForUser = (
  secureNote: SecureNote,
  userId: number,
) => {
  if (secureNote.userId !== userId) {
    throw new AppError('Secure note not found', 404);
  }
};
