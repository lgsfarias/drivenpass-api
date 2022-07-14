import * as credentialRepository from '../repositories/credential.repository.js';
import AppError from '../utils/AppError.js';

export const create = async (
  createCredentialData: credentialRepository.CreateCredentialData,
) => {
  const credential = await credentialRepository.create(createCredentialData);
  return credential;
};

export const findAllByUserId = async (userId: number) => {
  const credentials = await credentialRepository.findAllByUserId(userId);
  return credentials;
};

export const findById = async (id: number) => {
  const credential = await credentialRepository.findById(id);
  if (!credential) {
    throw new AppError('Credential not found', 404);
  }
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

export const deleteCredential = async (id: number) => {
  const credential = await credentialRepository.deleteCredential(id);
  return credential;
};
