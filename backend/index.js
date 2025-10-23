const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

const { PositionsModel } = require("./model/PositionsModel");

app.get("/addPositions", async (req, res) => {
  let tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];
  tempPositions.forEach((position) => {
    let newPosition = new PositionsModel({
      product: position.product,
      name: position.name,
      qty: position.qty,
      avg: position.avg,
      price: position.price,
      net: position.net,
      day: position.day,
      isLoss: position.isLoss,
    });
    newPosition.save();
  });
  res.send("Positions added successfully");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
  mongoose.connect(uri);
  console.log("Connected to MongoDB");
});
