import connectDB from './src/config/db';
import env from './src/config/env';
import logger from './src/utils/logger';
import app from './src/app';
const start = async (): Promise<void> => {
  await connectDB();
  app.listen(env.PORT, () => {
    logger.info(`Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
  });
};

start();