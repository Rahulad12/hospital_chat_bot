import mongoose from 'mongoose';
import env from './env';
import logger from '../utils/logger';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGO_URI);
    logger.info('MongoDB connected');
  } catch (error) {
    logger.error('DB Connection Error:', error);
    process.exit(1);
  }
};

export default connectDB;