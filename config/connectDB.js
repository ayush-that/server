// Initialize dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import the mongoose module
const mongoose = require("mongoose");

// Function to connect to the database
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
}

// Export the function
module.exports = connectDB;
