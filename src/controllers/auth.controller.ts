import { Request, Response } from 'express';
import { encryptPassword } from '../utils/auth.js';
import * as userService from '../services/user.service.js';

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = encryptPassword(password);
  const user = await userService.create({ email, password: hashedPassword });
  res.send(user);
};
