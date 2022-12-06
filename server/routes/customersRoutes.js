const express = require("express");
const router = express.Router();
const customersSchema = require("../models/customerModel");
const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    await customersSchema
      .find()
      .populate("tickets")
      .then((customer) => res.json(customer))
      .catch((err) => res.status(400).json(err));
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    await customersSchema
      .findById(req.params.id)
      .then((customer) => res.json(customer))
      .catch((err) => res.json(err));
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const newCustomer = new customersSchema({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });

    if (!req.body.phone || !req.body.email || !req.body.name) {
      return res.status(400).json("Please enter all fields");
    }

    await newCustomer
      .save()
      .then((newCustomer) => res.json("New customer Added"))
      .catch((err) => res.status(400).json("Customer already exists"));
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await customersSchema
      .findByIdAndDelete(req.params.id)
      .then(() => res.json("Customer has been deleted"))
      .catch((err) => res.status(400).json(err));
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    await customersSchema
      .findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => res.json("Customer has been updated"))
      .catch((err) => res.status(400).json(err));
  })
);

module.exports = router;
