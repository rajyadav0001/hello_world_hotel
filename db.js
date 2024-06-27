const mongoose = require("mongoose");
require('dotenv').config();

// const DB_URL =  process.env.DB_URL_LOCAL;
const DB_URL = process.env.DB_URL_ClOUD;

const ConnectionToMongoDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      // useNewUrlParser:true, // useUnifiedTopology:true
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    onsole.error("MongoDB Connection Failed", error);
  }
};

ConnectionToMongoDB();
module.exports = ConnectionToMongoDB;
