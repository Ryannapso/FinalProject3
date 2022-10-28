const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },

  status: {
    type: String,
    default: "open",
    enum: ["open", "Updated", "Answered", "Closed"],
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Message", messageSchema);
