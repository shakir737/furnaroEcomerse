import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = "mongodb+srv://shakirraza737:Anilla621@ecomerse.fxjt0iy.mongodb.net/Application?retryWrites=true&w=majority&appName=Ecomerse";

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

// # Singleton
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "furniro",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
