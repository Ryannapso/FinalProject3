const mongoose = require("mongoose");

const AdminMessageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AdminMessage", AdminMessageSchema);
