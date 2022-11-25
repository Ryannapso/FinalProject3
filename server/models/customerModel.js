const mongoose = require("mongoose");
const customersSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },

    tickets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],
    pcBuilds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PCBuild",
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customersSchema);
