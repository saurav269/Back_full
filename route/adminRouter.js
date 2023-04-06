
const express = require("express");
const { DoctorModel } = require("../model/doctor.Model");

const adminRoutes = express.Router();
adminRoutes.post("/add", async (req, res) => {
  const payload = req.body;

  try {
    const new_product = new DoctorModel(payload);

    await new_product.save();

    res.send({ msg: "Doctors has been saved" });
  } catch (err) {
    res.send({ msg: "invalid" });
  }
});

  module.exports={
    adminRoutes
  }