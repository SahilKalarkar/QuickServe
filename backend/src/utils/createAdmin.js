require("dotenv").config();

const connectDB = require("../config/db");
const User = require("../models/User");
const { hashPassword } = require("./password");

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({
      role: "admin",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const password = await hashPassword("Admin@12345");

    await User.create({
      firstName: "QuickServe",
      lastName: "Admin",
      email: "admin@quickserve.com",
      phone: "9000000000",
      password,
      role: "admin",
    });

    console.log("Admin created successfully");

    process.exit(0);
  } catch (error) {
    console.error("Admin creation failed:", error);
    process.exit(1);
  }
};

createAdmin();
