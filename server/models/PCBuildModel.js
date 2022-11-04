const mongoose = require("mongoose");

const pcBuildsSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PCBuild", pcBuildsSchema);
