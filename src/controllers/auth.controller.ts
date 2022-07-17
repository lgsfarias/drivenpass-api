import { Request, Response } from 'express';
import { encryptPassword, generateToken } from '../utils/auth.js';
import * as userService from '../services/user.service.js';

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  await userService.verifyIfUserExists(email);
  const hashedPassword = encryptPassword(password);
  const user = await userService.create({ email, password: hashedPassword });
  res.send(user);
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await userService.verifyCredentials(email, password);
  const token = generateToken(user.id);
  res.send({ token });
};

export const checkAuth = async (req: Request, res: Response) => {
  const { user } = res.locals;
  res.json({
    message: 'You are authenticated',
    user: {
      id: user.id,
      email: user.email,
    },
  });
};
