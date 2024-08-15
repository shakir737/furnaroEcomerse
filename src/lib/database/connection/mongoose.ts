import mongoose from "mongoose";




// interface MongooseConnection {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConnection = (global as any).mongoose;

// # Singleton
// if (!cached) {
//   cached = (global as any).mongoose = {
//     conn: null,
//     promise: null,
//   };
// }
let isConnected = false;

export const connectToDatabase = async () => {
  
  if (isConnected) {
    return;
  }
  const MONGODB_URL = `mongodb+srv://shakirraza737:Anilla621@ecomerse.fxjt0iy.mongodb.net/Application?retryWrites=true&w=majority&appName=Ecomerse`;
  try {
  await mongoose.connect(MONGODB_URL);
  isConnected = true;
  console.log("Connected to MongoDB.");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
  throw error;
}
  // if (cached.conn) return cached.conn;

  // if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  // cached.promise =
  //   cached.promise ||
  //   mongoose.connect(MONGODB_URL, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });

  // cached.conn = await cached.promise;

  // return cached.conn;
};
