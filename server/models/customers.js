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
  tickets: [{
     type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
  }]
});

module.exports = mongoose.model("Customer", customersSchema);
