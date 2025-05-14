import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


export const env = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  SENTRY_DSN: process.env.SENTRY_DSN,
  NODE_ENV: process.env.NODE_ENV,
}
   