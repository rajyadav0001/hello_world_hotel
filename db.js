const mongoose = require("mongoose");

const DB_URL = `mongodb://localhost:27017/helloWorld`;

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
