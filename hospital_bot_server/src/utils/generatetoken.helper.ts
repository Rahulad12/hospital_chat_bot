import jwt from 'jsonwebtoken';
import env from '@/config/env';
import { AuthPayload } from '@/types/user.types';

export const generateToken = (payload: AuthPayload): string => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};
