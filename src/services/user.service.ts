import * as userRepository from '../repositories/user.repository.js';

export const create = async (createUserData: userRepository.CreateUserData) => {
  const user = await userRepository.create(createUserData);
  return user;
};
