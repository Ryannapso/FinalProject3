const express = require("express");
const router = express.Router();
const AdminMessageSchema = require("../models/AdminMessageModel");
const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    await AdminMessageSchema.find()
      .then((msgs) => res.json(msgs))
      .catch((err) => res.status(400).json(err));
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    await AdminMessageSchema.findById(req.params.id)
      .then((msgs) => res.json(msgs))
      .catch((err) => res.json(err));
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const newMsgs = new AdminMessageSchema({
      title: req.body.title,
      msg: req.body.msg,
      type: req.body.type,
    });

    await newMsgs
      .save()
      .then((msgs) => res.json("Message had been added"))
      .catch((err) => res.status(400).json(err));
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await AdminMessageSchema.findByIdAndDelete(req.params.id)
      .then(() => res.json("Message has been deleted"))
      .catch((err) => res.status(400).json(err));
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    await AdminMessageSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
      .then(() => res.json("Message has been updated"))
      .catch((err) => res.status(400).json(err));
  })
);

module.exports = router;
