import mongoose from "mongoose";
import app from "./app";
import { env } from "./app/config/env";
import { logger } from "./app/utils/logger";

async function startServer() {
  try {
    await mongoose.connect(env.DB_URL as string);
    logger.info('MongoDB connected successfully');

    app.listen(env.PORT, () => {
      logger.info(`🚀 Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    logger.error("❌ Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

startServer();
