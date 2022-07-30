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
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "open",
    enum: ["open", "Updated", "Answered", "Closed"],
  },
});

module.exports = mongoose.model("Message", messageSchema);
