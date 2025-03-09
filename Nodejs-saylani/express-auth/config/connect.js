const mongoose = require("mongoose");

const conn = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/firstDB");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = conn;