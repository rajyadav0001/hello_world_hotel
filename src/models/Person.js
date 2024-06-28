const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        unique:true,
        required:true
     },
     mobile:{
        type:String,
        required:true
     },
     age:{
        type:Number
     },
     work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
     },
     address:{
        type:String
     },
     salary:{
        type:Number,
        required:true
     }
})

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;