import Crypter from 'cryptr';

const cryptr = new Crypter(process.env.CRYPTR_SECRET);

const encryptPassword = (password: string): string => {
  return cryptr.encrypt(password);
};

const decryptPassword = (password: string): string => {
  return cryptr.decrypt(password);
};
