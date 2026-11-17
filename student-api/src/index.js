import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config();

const startServer = async () => {
  const isDbConnected = await connectDB();

  if (!isDbConnected) {
    console.warn(
      "Server started without a database connection. Update MONGODB_URI or allow your Atlas IP in Network Access.",
    );
  }

  app.on("error", (error) => {
    console.error("Server error:", error);
    throw error;
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
