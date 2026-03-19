import { Request, Response, NextFunction } from 'express';
import env from '@/config/env';
import { AuthPayload } from '@/types/user.types';
import { AppError } from '@/utils/error.helper';
import jwt from 'jsonwebtoken';
export interface AuthRequest extends Request {
  user?: AuthPayload;
}

export const authmiddleware = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction,
): void => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    throw AppError.unauthorized('Unauthorized');
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as AuthPayload;
    req.user = decoded;
    next();
  } catch (error) {
    throw AppError.unauthorized('Invalid token');
  }
};
