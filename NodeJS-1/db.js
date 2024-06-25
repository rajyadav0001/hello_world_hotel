const mongoose = require('mongoose');


const DB_URL = `mongodb://localhost:27017/helloWorld`;

const ConnectionToMongoDB = ()=>{
      try {
        const connect = mongoose.connect(DB_URL,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true
        })
        console.log('MongoDB Connected Successfully');
        return connect;
      } catch (error) {
        console.log('MongoDB Connected Successfully');
        return error;
      }
}

module.exports = ConnectionToMongoDB;