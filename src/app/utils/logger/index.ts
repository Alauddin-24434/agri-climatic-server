import { developmentLogger } from './developmentLogger';
import { productionLogger } from './productionLogger';

const env = process.env.NODE_ENV;

export const logger = env === 'production' ? productionLogger : developmentLogger;
