const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticketModel");
const Customer = require("../models/customerModel");
const asyncHandler = require("express-async-handler");

router.get("/", asyncHandler(async (req, res) => {
  await Ticket.find()
    .populate("customer")
    .then((ticket) => res.json(ticket))
    .catch((err) => res.status(400).json(err));
}));

router.get("/test", asyncHandler(async (req, res) => {
  await Ticket.findOne({ problem: "broken phone" })
    .populate("customer")
    .then((ticket) => res.json(ticket))
    .catch((err) => res.status(400).json(err));
}));

router.get("/:id", asyncHandler(async(req, res) => {
  await Ticket.findById(req.params.id)
    .then((ticket) => res.json(ticket))
    .catch((err) => res.json(err));
}));

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      problem,
      assignedTo,
      status,
      customerPhone,
      cpu,
      motherboard,
      memory,
      gpu,
      pcCase,
      powerSupply,
      storage,
      cpuCooler,
    } = req.body;
    const customer = await Customer.findOne({ phone: customerPhone });

    if (customer) {
      const ticket = await Ticket.create({
        problem,
        assignedTo,
        status,
        customerPhone,
        customer: customer.id,
        cpu,
        motherboard,
        memory,
        gpu,
        pcCase,
        powerSupply,
        storage,
        cpuCooler,
      });

      await customer.tickets.push(ticket._id);
      await customer.save();
      res.status(201).json("Ticket has been created !");
    } else {
      res.status(400);
      throw new Error("Customer does not exists");
    }
  })
);

router.delete("/:id", asyncHandler(async(req, res) => {
  await Ticket.findByIdAndDelete(req.params.id)
    .then(() => res.json("Ticket has been deleted"))
    .catch((err) => res.status(400).json(err));
}));

router.put("/:id", asyncHandler(async(req, res) => {
  await Ticket.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.json("Ticket has been updated"))
    .catch((err) => res.status(400).json(err));
}));

module.exports = router;
