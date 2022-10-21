const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Ticket = require("../models/ticketModel");

const start = new Date("2022-8-5").toDateString();
const end = new Date("2022-8-6").toDateString();

router.get(
  "/",
  asyncHandler(async (req, res) => {
  
    await Ticket.find({
      createdAt: { $gte: start, $lt: end },
    })
      .then((ticket) => res.json(ticket))
      .catch((err) => res.status(400).json("Error: " + err));
  })
);

module.exports = router;
