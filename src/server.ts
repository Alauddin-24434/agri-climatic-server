import mongoose from "mongoose";
import app from "./app";
import { env } from "./app/config/env";

async function startServer() {
  try {
    await mongoose.connect(env.DB_URL as string);
    console.log("✅ Connected to MongoDB");

    app.listen(env.PORT, () => {
      console.log(`🚀 Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB", error);
    process.exit(1); 
  }
}

startServer();