const mongoose = require("mongoose");
const ticketsSchema = require("../models/ticketModel");

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
  ticketsSchema:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'ticketsSchema'
    }
  ]

});

module.exports = mongoose.model("Customer", customersSchema);
