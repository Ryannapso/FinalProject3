const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticketModel");
const Customer = require("../models/customerModel");
const asyncHandler = require("express-async-handler");

router.get("/", async (req, res) => {
  await Ticket.find()
    .then((ticket) => res.json(ticket))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.get("/search", (req, res) => {
//   Ticket.find({})
//     .then((ticket) => res.json(ticket))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.get("/:id", (req, res) => {
  Ticket.findById(req.params.id)
    .then((ticket) => res.json(ticket))
    .catch((err) => res.json("Error: +err"));
});

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { problem, assignedTo, status, customerPhone,employeePhone } = req.body;
    const customer = await Customer.findOne({ phone: customerPhone });

    if (customer) {
      const ticket = await Ticket.create({
        problem,
        assignedTo,
        status,
        customerPhone,
        employeePhone,
      });

      customer.tickets.push(ticket._id);
      customer.save();
      res.status(201).json(ticket);
    } else {
      res.status(400);
      throw new Error("Customer does not exists");
    }
  })
);

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

// //find
// router.get("/search/:key", async (req, res) => {
//   let data = await Ticket.find({
//     $or: [
//       // { assignedTo: { $regex: req.params.key } },
//       // { phone: { $regex: req.params.key } },
//       { status: { $regex: req.params.key } },
//     ],
//   });
//   res.send(data);
// });

router.get("/");

module.exports = router;
