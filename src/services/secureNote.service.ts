import AppError from '../utils/AppError.js';
import * as secureNoteRepository from '../repositories/secureNote.repository.js';

export const create = async (
  createSecureNoteData: secureNoteRepository.CreateSecureNoteData,
) => {
  const secureNote = await secureNoteRepository.create(createSecureNoteData);
  return secureNote;
};

export const verifyIfLabelAlreadyExists = async (
  label: string,
  userId: number,
) => {
  const secureNote = await secureNoteRepository.findByLabelAndUserId(
    label,
    userId,
  );
  if (secureNote) {
    throw new AppError('Label already exists', 400);
  }
};
