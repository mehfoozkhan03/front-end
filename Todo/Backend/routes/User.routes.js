const express = require("express");

const { login, signup } = require("../controller/User.controller");

const { User } = require("../model/user.model");

const UserRoutes = express.Router();

UserRoutes.get("/", async (req, res) => {
  const userData = await User.find();
  console.log("userData", userData);
  res.send({ msg: "User data fetched successfully", userData });
});

UserRoutes.post("/login", login);
UserRoutes.post("/signup", signup);

module.exports = { UserRoutes };
