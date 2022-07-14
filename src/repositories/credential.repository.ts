import { Credential } from '@prisma/client';
import prisma from '../config/database.js';

export type CreateCredentialData = Omit<Credential, 'id' | 'createdAt'>;

export const create = async (createCredentialData: CreateCredentialData) => {
  const credential = await prisma.credential.create({
    data: createCredentialData,
  });
  return credential;
};

export const findByLabelAndUserId = async (label: string, userId: number) => {
  const credential = await prisma.credential.findFirst({
    where: {
      label,
      userId,
    },
  });
  return credential;
};
