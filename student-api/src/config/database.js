import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/student-api";

  try {
    const connectionInstance = await mongoose.connect(mongoUri);
    console.log(
      `\nMongoDB connected !!! ${connectionInstance.connection.host}`,
    );
    return true;
  } catch (error) {
    console.error("MongoDB connection failed.", error.message || error);
    console.warn(
      "Falling back to local MongoDB: mongodb://127.0.0.1:27017/student-api",
    );
    return false;
  }
};

export default connectDB;
