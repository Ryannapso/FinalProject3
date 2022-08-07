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
    date: {
      type: Date,
      default: Date.now,
    },
    tickets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customersSchema);
