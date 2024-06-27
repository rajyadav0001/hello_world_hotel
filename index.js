const express = require('express');
const ConnectionToMongoDB = require('./db');
const bodyParser = require('body-parser');
const MenuItem = require('./models/Menu');
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes')

const app = express();
const port = 5000;

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

