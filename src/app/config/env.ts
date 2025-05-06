import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


export const env = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL
}
    