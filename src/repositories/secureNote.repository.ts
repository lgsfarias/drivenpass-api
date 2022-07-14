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

export const findAllByUserId = async (userId: number) => {
  const secureNotes = await prisma.secureNote.findMany({
    where: {
      userId,
    },
  });
  return secureNotes;
};

export const findById = async (id: number) => {
  const secureNote = await prisma.secureNote.findUnique({
    where: {
      id,
    },
  });
  return secureNote;
};

export const deleteSecureNote = async (id: number) => {
  const secureNote = await prisma.secureNote.delete({
    where: {
      id,
    },
  });
  return secureNote;
};
