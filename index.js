const express = require('express');
const ConnectionToMongoDB = require('./db');
const bodyParser = require('body-parser');
// const personRoutes = require('../routes/personRoutes');
const personRoutes = require('./src/routes/personRoutes');
const menuItemRoutes = require('./src/routes/menuItemRoutes')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

 
//Defalut route for the server
app.get('/', (req,res)=>{
    res.send("Welcome to My Hotel !, How can i help you?");
})
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    // ConnectionToMongoDB();
});

