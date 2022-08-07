const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticketModel");
const Customer = require("../models/customerModel");

router.get("/", async (req, res) => {
  await Ticket.find()
    .then((ticket) => res.json(ticket))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/search", (req, res) => {
  Ticket.find({})
    .then((ticket) => res.json(ticket))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Ticket.findById(req.params.id)
    .then((ticket) => res.json(ticket))
    .catch((err) => res.json("Error: +err"));
});

router.post("/", async (req, res) => {
  const ticket = await Ticket.create({
    problem: req.body.problem,
    assignedTo: req.body.assignedTo,
    status: req.body.status,
    customerPhone: req.body.customerPhone,
  });

  const customer = await Customer.findOne({ phone: ticket.customerPhone });

  customer.tickets.push(ticket._id);
  customer.save();
  res.status(200).json(ticket);
});

router.delete("/:id", (req, res) => {
  Ticket.findByIdAndDelete(req.params.id)
    .then(() => res.json("ticket deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
  Ticket.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.json("ticketsSchema updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//find
router.get("/search/:key", async (req, res) => {
  let data = await Ticket.find({
    $or: [
      // { assignedTo: { $regex: req.params.key } },
      // { phone: { $regex: req.params.key } },
      { status: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

module.exports = router;
