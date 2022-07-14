import bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => {
  const cost = +process.env.HASH_COST;
  const hashedPassword = bcrypt.hashSync(password, cost);
  return hashedPassword;
};
