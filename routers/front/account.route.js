const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const moment = require("moment");
const userModel = require("../../models/user.model");

router.get("/register", async (req, res) => {
  res.render("vwAccount/register");
});

router.post("/register", async (req, res) => {
  const { password, username, email, dob, name } = req.body;
  const hash = bcrypt.hashSync(password, 10);

  const dob_formated = moment(dob, "DD/MM/YYYY").format("YYYY-MM-DD");

  const user = {
    f_Username: username,
    f_Password: hash,
    f_DOB: dob_formated,
    f_Permission: 0,
    f_Name: name,
    f_Email: email,
  };

  await userModel.add(user);

  // làm xong rồi thì render
  res.render("vwAccount/register");
});

router.get("/is-available", async (req, res) => {
  const username = req.query.user;
  const user = await userModel.singleByUserName(username);
  if (user === null) {
    return res.json(true);
  }
  return res.json(false);
});

module.exports = router;
