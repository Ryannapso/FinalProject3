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
  customerName: {
      type: String
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketsSchema);
