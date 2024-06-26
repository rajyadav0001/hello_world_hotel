const express = require('express');
const ConnectionToMongoDB = require('./db');
const bodyParser = require('body-parser');
const Person = require("./models/person");

const app = express();
const port = 5000;

app.use(bodyParser.json());


app.post('/person', async (req,res)=>{
     try{
         const data = req.body;
         const newPerson = await Person.create(data);
         res.status(201).send(newPerson);
     }catch(err){
         console.log(err);
         res.status(500).send({Error : "Internal server error"});
     }
})
app.get('/person', async (req,res)=>{
    try{
        const data = await Person.find();
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

