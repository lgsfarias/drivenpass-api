import { Card } from '@prisma/client';
import prisma from '../config/database.js';

export type CreateCardData = Omit<Card, 'id' | 'createdAt'>;

export const create = async (createCardData: CreateCardData) => {
  const card = await prisma.card.create({
    data: createCardData,
  });
  return card;
};

export const findByLabelAndUserId = async (label: string, userId: number) => {
  const card = await prisma.card.findFirst({
    where: {
      label,
      userId,
    },
  });
  return card;
};

export const findAllByUserId = async (userId: number) => {
  const cards = await prisma.card.findMany({
    where: {
      userId,
    },
  });
  return cards;
};

export const findById = async (id: number) => {
  const card = await prisma.card.findUnique({
    where: {
      id,
    },
  });
  return card;
};

export const deletecard = async (id: number) => {
  const card = await prisma.card.delete({
    where: {
      id,
    },
  });
  return card;
};
