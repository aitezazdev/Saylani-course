import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected: ${dbConnection.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default dbConnection;