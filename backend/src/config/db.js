const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    // console.log(`MongoDB Connected: ${connection.connection.host}`);
    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    // console.error("MongoDB Connection Failed", error.message);
    console.error("MongoDB connection failed ❌");
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
