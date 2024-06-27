const express = require("express");
const Person = require("../models/Person");
const router = express.Router();

//create a new person with the specified name and details
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = await Person.create(data);
    res.status(201).send(newPerson);
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Internal server error" });
  }
});

//get all the persons details
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Internal server error" });
  }
});

//get the person on the basis of the workType
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType === "chef" ||
      workType === "waiter" ||
      workType === "manager"
    ) {
      const data = await Person.find({ work: workType });
      res.status(200).send(data);
    } else {
      res.status(404).send({ Error: "Invalid Work Type" });
    }
  } catch (error) {
    console.log(err);
    res.status(500).send({ Error: "Internal server error" });
  }
});

//update the persone on the basis of the id
router.put("/:id", async (req, res) => {
  try {
    const updatedPersonData = await Person.findByIdAndUpdate( req.params.id, req.body, { new: true });
    res.status(200).send(updatedPersonData);
    if (!updatedPersonData) {
      res.status(404).send({ error: "Person not found" });
    }
  } catch (error) {
    console.log(err);
    res.status(500).send({ Error: "Internal server error" });
  }
});
//delete the persone on the basis of the id
router.delete('/:id', async(req, res)=>{
  try {
     const deletePerson = await Person.findByIdAndDelete(req.params.id);
     if(!deletePerson){
        res.status(404).send({message:"Person not found"});
     } 
    res.status(200).send({message:"Person deleted successfully"});
  } catch (error) {
    console.log(err);
    res.status(500).send({ Error: "Internal server error" });
  }
})
module.exports = router;
