const mongoose = require("mongoose");

const customersSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  UserDate: {
    type: Date,
    default: Date.now,
  },
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
});

module.exports = mongoose.model("customer", customersSchema);
