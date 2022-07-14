import * as credentialRepository from '../repositories/credential.repository.js';
import AppError from '../utils/AppError.js';

export const create = async (
  createCredentialData: credentialRepository.CreateCredentialData,
) => {
  const credential = await credentialRepository.create(createCredentialData);
  return credential;
};

export const verifyIfLabelAlreadyExists = async (
  label: string,
  userId: number,
) => {
  const credential = await credentialRepository.findByLabelAndUserId(
    label,
    userId,
  );
  if (credential) {
    throw new AppError('Credential already exists', 400);
  }
};
