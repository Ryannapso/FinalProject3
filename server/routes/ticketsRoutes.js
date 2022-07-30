const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let ticketsSchema = require("../models/ticketModel");
const Customer = require("../models/customers")

router.get("/", (req, res) => {
  ticketsSchema
    .find()
    .then((ticket) => res.json(ticket))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/search", (req, res) => {
  ticketsSchema
    .find({ customer: "M1221" })
  .then((ticket) => res.json(ticket))
    .catch((err) => res.status(400).json("Error: " + err));
})

router.get("/:id", (req, res) => {
  ticketsSchema
    .findById(req.params.id)
    .then((ticket) => res.json(ticket))
    .catch((err) => res.json("Error: +err"));
});

router.post("/", (req, res) => {
  const newTicket = new ticketsSchema({
    
    date: req.body.date,
    problem: req.body.problem,
    status: req.body.status,
    assignedTo: req.body.assignedTo,
  });

  newTicket
    .save()
    .then((result) => Customer.findById("62e53c81cdd5a63fdcdf00d8", (err, customer) => {
      if (customer) {
        res.json({message: "Ticker Created !"})
      }
    }))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  ticketsSchema
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("ticket deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
  ticketsSchema
    .findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.json("ticketsSchema updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//find
router.get("/search/:key",async(req, res)=>{
  
  let data = await ticketsSchema.find({
    "$or":[
      {email:{$regex:req.params.key}},
      {phone:{$regex:req.params.key}}
    ]
  })
  res.send(data)
})

module.exports = router;
