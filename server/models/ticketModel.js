const mongoose = require("mongoose");

const ticketsSchema = mongoose.Schema({
  problem: {
    type: String,
  },
  assignedTo: {
    type: String,
    default: "cr",
    enum: ["cr", "Phone", "PC", "BuildPc"],
  },
  status: {
    type: String,
    default: "open",
    enum: ["open", "Updated", "Answered", "Closed"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // customer: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: [true, "ticket has to be linked to a customer."],
  //     ref: "Customer",
  //   },
});

module.exports = mongoose.model("ticket", ticketsSchema);
