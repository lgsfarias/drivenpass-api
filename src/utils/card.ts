import { Card } from '@prisma/client';
import AppError from './AppError.js';

export const verifyIfCardIsForUser = (card: Card, userId: number) => {
  if (card.userId !== userId) {
    throw new AppError('Card not found', 404);
  }
};
