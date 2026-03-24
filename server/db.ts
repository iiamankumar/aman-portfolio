import mongoose from "mongoose";

// MongoDB connection
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/portfolio";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URL);
    isConnected = true;
    console.log("[database] MongoDB connected successfully");
  } catch (error) {
    console.error("[database] MongoDB connection error:", error);
    throw error;
  }
}

// Export mongoose for use in other files
export { mongoose };
export const db = mongoose;
