import dotenv from 'dotenv';
import { SignOptions } from 'jsonwebtoken';
dotenv.config();

interface EnvConfig {
  PORT: number;
  NODE_ENV: string;
  MONGO_URI: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: SignOptions['expiresIn'];
}

const env: EnvConfig = {
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || '',
  JWT_SECRET: process.env.JWT_SECRET || 'fallback_secret',
  JWT_EXPIRES_IN: (process.env.JWT_EXPIRES_IN as SignOptions['expiresIn']) || '7d',
};

export default env;