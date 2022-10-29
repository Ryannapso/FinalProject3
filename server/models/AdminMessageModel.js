const mongoose = require("mongoose");

const AdminMessageSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    msg: {
      type: String,
    },
    type: {
      type: String,
    },
    // date: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AdminMessage", AdminMessageSchema);
