import AppError from '../utils/AppError.js';
import * as cardRepository from '../repositories/card.repository.js';

export const create = async (createCardData: cardRepository.CreateCardData) => {
  const card = await cardRepository.create(createCardData);
  return card;
};

export const findAllByUserId = async (userId: number) => {
  const cards = await cardRepository.findAllByUserId(userId);
  return cards;
};

export const findById = async (id: number) => {
  const card = await cardRepository.findById(id);
  if (!card) {
    throw new AppError('Secure note not found', 404);
  }
  return card;
};

export const verifyIfLabelAlreadyExists = async (
  label: string,
  userId: number,
) => {
  const card = await cardRepository.findByLabelAndUserId(label, userId);
  if (card) {
    throw new AppError('Label already exists', 400);
  }
};

export const deleteCard = async (id: number) => {
  const card = await cardRepository.deletecard(id);
  return card;
};
