const express = require("express");
const router = express.Router();
const PCBuild = require("../models/PCBuildModel");
const Customer = require("../models/customerModel");
const asyncHandler = require("express-async-handler");

router.get("/", asyncHandler(async (req, res) => {
  await PCBuild.find()
    .populate("customer")
    .then((pcBuild) => res.json(pcBuild))
    .catch((err) => res.status(400).json(err));
}));

router.get("/:id", asyncHandler(async(req, res) => {
  await PCBuild.findById(req.params.id)
    .then((pcBuild) => res.json(pcBuild))
    .catch((err) => res.json(err));
}));

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { cpu, motherboard, memory, gpu, pcCase, powerSupply, storage, cpuCooler, status, customerPhone} = req.body;
    const customer = await Customer.findOne({ phone: customerPhone });

    if (customer) {
      const pcBuild = await PCBuild.create({
        cpu,
        motherboard,
        memory,
        gpu,
        pcCase,
        powerSupply,
        storage,
        cpuCooler,
        status,
        customerPhone,
        customer: customer.id,
      });

      await customer.pcBuilds.push(pcBuild._id);
      await customer.save();
      res.status(201).json(pcBuild);
    } else {
      res.status(400);
      throw new Error("Customer does not exists");
    }
  })
);

router.delete("/:id",asyncHandler(async (req, res) => {
  await PCBuild.findByIdAndDelete(req.params.id)
    .then(() => res.json("pcBuild deleted"))
    .catch((err) => res.status(400).json(err));
}));

router.put("/:id", asyncHandler(async(req, res) => {
  await PCBuild.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.json("pcBuild updated"))
    .catch((err) => res.status(400).json(err));
}));

module.exports = router;
