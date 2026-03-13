const mongoose = require("mongoose");
const config = require("../config/config");

// Connect to the database
const connectDatabase = async () => {
  try {
    await mongoose.connect(config.mongo.uri, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
