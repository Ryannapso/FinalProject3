const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let messageSchema = require("../models/messageModel");



router.get("/", (req, res) => {
  messageSchema
    .find()
    .then((msgs) => res.json(msgs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  messageSchema
    .findById(req.params.id)
    .then((msgs) => res.json(msgs))
    .catch((err) => res.json("Error: +err"));
});

router.post("/", (req, res) => {
  const newMsgs = new messageSchema({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    status: req.body.status,
    date: req.body.status,
    phone: req.body.phone,
  });

  newMsgs
    .save()
    .then((msgs) => res.json("New Msgs Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  messageSchema
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("msg deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
  messageSchema
    .findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.json("messageSchema updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
