const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let customersSchema = require("../models/customers");



router.get("/", (req, res) => {
  customersSchema
    .find()
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  customersSchema
    .findById(req.params.id)
    .then((customer) => res.json(customer))
    .catch((err) => res.json("Error: +err"));
});

router.post("/", (req, res) => {
  const newCustomer = new customersSchema({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    UserDate: req.body.UserDate,
    problem: req.body.problem,
    assignedTo: req.body.assignedTo,
    status: req.body.status,
  });

  newCustomer
    .save()
    .then((customer) => res.json("New customer Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  customersSchema
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("customer deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
  customersSchema
    .findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.json("customersSchema updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//find
router.get("/:key",async(req, res)=>{
  
  let data = await customersSchema.find({
    "$or":[
     // {email:{$regex:req.params.key}},
      {phone:{$regex:req.params.key}}
    ]
  })
  res.send(data)
})

module.exports = router;
