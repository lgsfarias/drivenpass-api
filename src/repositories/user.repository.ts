import { User } from '@prisma/client';
import prisma from '../config/database';

export type CreateUserData = Omit<User, 'id' | 'createdAt'>;

export const create = async (createUserData: CreateUserData) => {
  const user = await prisma.user.create({
    data: createUserData,
  });
  return user;
};
