const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const ticketsSchema = mongoose.Schema(
  {
    problem: {
      type: String,
    },
    assignedTo: {
      type: String,
      default: "cr",
      enum: ["cr", "Phone", "PCfix", "BuildPc"],
    },
    status: {
      type: String,
      default: "open",
      enum: ["open", "Updated", "Answered", "Closed"],
    },
    customerPhone: {
      type: String,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    cpu: {
      type: String,
    },
    motherboard: {
      type: String,
    },
    memory: {
      type: String,
    },
    gpu: {
      type: String,
    },
    pcCase: {
      type: String,
    },
    powerSupply: {
      type: String,
    },
    storage: {
      type: String,
    },
    cpuCooler: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketsSchema);
