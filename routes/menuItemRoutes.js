const express = require('express');

const router = express.Router();
const MenuItem = require('../models/Menu');

//create a new menu item 
router.post('/', async (req,res)=>{
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
router.get('/', async (req,res)=>{
    try{
        const data = await MenuItem.find();
        res.status(200).send(data);
    }catch(err){
        console.log(err);
        res.status(500).send({Error : "Internal server error"});
    }
})
//get the menu items on the basis of the taste
router.get('/:menutaste', async (req, res)=>{
     try {
        const menuTaste = req.params.menutaste;
        if(menuTaste === 'sweet' || menuTaste === 'sour' || menuTaste === 'spicy'){
             const data = await MenuItem.find({taste: menuTaste});
             res.status(200).send(data);
        }else{
             res.status(404).send({Error : "Invalid taste type request"});
        }
     } catch (error) {
        res.status(500).send({Error : "Internal server error"});
     }
})
module.exports = router;

