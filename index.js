const express = require('express');
const ConnectionToMongoDB = require('./db');
const bodyParser = require('body-parser');
const MenuItem = require('./models/Menu');
const personRoutes = require('./routes/personRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());


//Defalut route for the server
app.get('/', (req,res)=>{
    res.send("Welcome to My Hotel !, How can i help you?");
})
app.use('/person', personRoutes);

//create a new menu item 
app.post('/menu', async (req,res)=>{
    try{
        const data = req.body;
        const newMenu = await MenuItem.create(data);
        res.status(201).send(newMenu);
    }catch(err){
        console.log(err);
        res.status(500).send({Error : "Internal server error"});
    }
})

//get all the menu items
app.get('/menu', async (req,res)=>{
    try{
        const data = await MenuItem.find();
        res.status(200).send(data);
    }catch(err){
        console.log(err);
        res.status(500).send({Error : "Internal server error"});
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    // ConnectionToMongoDB();
});

