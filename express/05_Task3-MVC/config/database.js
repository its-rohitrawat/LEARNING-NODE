import mongoose from "mongoose";

export async function connectDB() {
  try {
      await mongoose.connect(process.env.MONGODB_URI)
     console.log("database connected");
    
  } catch (error) {
         console.log("database connection failed");
         process.exit(1)   
  }
}