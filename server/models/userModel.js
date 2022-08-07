const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    //required: true,
    maxlength: 15,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Lname: {
    type: String,
    // required: true,
    maxlength: 15,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 10,
  },
  location: {
    type: String,
    //required: true,
    maxlength: 15,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
    enum: ["admin", "cr", "tech", "user"],
  },
  // status: {
  //   type: String,
  //   default: "Open",
  //   enum: ["Open", "Updated", "PC", "phone", "buildPc", "Admin", "Closed"],
  // },
});

module.exports = mongoose.model("User", userSchema);
