import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/AppError.js';
import * as userService from './../services/user.service.js';

interface UserIdJwtPayload extends jwt.JwtPayload {
  userId: number;
}

const verifiTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new AppError('Token not provided', 401);
  }

  const parts = authorization.split(' ');
  if (!(parts.length === 2)) {
    throw new AppError('Invalid authorization header', 401);
  }

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    throw new AppError('Invalid authorization header', 401);
  }

  const { userId } = <UserIdJwtPayload>(
    jwt.verify(token, process.env.JWT_SECRET)
  );
  const user = await userService.getUserById(userId);
  if (!user) {
    throw new AppError('Invalid token', 401);
  }

  res.locals.user = user;
  next();
};

export default verifiTokenMiddleware;
