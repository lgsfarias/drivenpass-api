import * as userRepository from '../repositories/user.repository.js';
import { verifyPassword } from '../utils/auth.js';
import AppError from '../utils/AppError.js';

export const create = async (createUserData: userRepository.CreateUserData) => {
  const user = await userRepository.create(createUserData);
  return user;
};

export const getUserById = async (id: number) => {
  const user = await userRepository.getUserById(id);
  return user;
};

export const verifyIfUserExists = async (email: string) => {
  const user = await userRepository.getUserByEmail(email);
  if (user) {
    throw new AppError('User already exists', 400);
  }
};

export const verifyCredentials = async (email: string, password: string) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new AppError('Email or password invalid', 401);
  }
  const isPasswordValid = verifyPassword(password, user.password);
  if (!isPasswordValid) {
    throw new AppError('Email or password invalid', 401);
  }
  return user;
};
