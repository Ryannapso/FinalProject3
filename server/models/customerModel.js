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
  tickets: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket"
    }],
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customersSchema);
