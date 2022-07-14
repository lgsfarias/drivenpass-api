import AppError from '../utils/AppError.js';
import Cryptr from 'cryptr';

const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

export const encryptPassword = (password: string): string => {
  try {
    return cryptr.encrypt(password);
  } catch (error) {
    throw new AppError('Error encrypting password', 500);
  }
};

export const decryptPassword = (password: string): string => {
  try {
    return cryptr.decrypt(password);
  } catch (error) {
    throw new AppError('Error decrypting password', 500);
  }
};
