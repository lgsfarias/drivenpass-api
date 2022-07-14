import { SecureNote } from '@prisma/client';
import prisma from '../config/database.js';

export type CreateSecureNoteData = Omit<SecureNote, 'id' | 'createdAt'>;

export const create = async (createSecureNoteData: CreateSecureNoteData) => {
  const secureNote = await prisma.secureNote.create({
    data: createSecureNoteData,
  });
  return secureNote;
};

export const findByLabelAndUserId = async (label: string, userId: number) => {
  const secureNote = await prisma.secureNote.findFirst({
    where: {
      label,
      userId,
    },
  });
  return secureNote;
};
