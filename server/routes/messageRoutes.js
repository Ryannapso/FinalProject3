const express = require("express");
const router = express.Router();
const messageSchema = require("../models/messageModel");
const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    await messageSchema
      .find()
      .then((msgs) => res.json(msgs))
      .catch((err) => res.status(400).json(err));
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    await messageSchema
      .findById(req.params.id)
      .then((msgs) => res.json(msgs))
      .catch((err) => res.json(err));
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const newMsgs = new messageSchema({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      status: req.body.status,
      date: req.body.status,
      phone: req.body.phone,
    });

    await newMsgs
      .save()
      .then(() => res.json("Message sent !"))
      .catch((err) => res.status(400).json(err));
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await messageSchema
      .findByIdAndDelete(req.params.id)
      .then(() => res.json("Message has been deleted !"))
      .catch((err) => res.status(400).json(err));
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    await messageSchema
      .findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => res.json("Message has been updated !"))
      .catch((err) => res.status(400).json(err));
  })
);
module.exports = router;
