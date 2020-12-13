const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const moment = require("moment");
const userModel = require("../../models/user.model");
const auth = require("./../../middlewares/auth.mdw");

// post logout
router.post("/logout", async (req, res) => {
  req.session.isAuth = false;
  req.session.authUser = null;

  res.redirect(req.headers.referer);
});

//get login
router.get("/login", async (req, res) => {
  // login - current page -
  // referer - previous page
  const referer = req.headers.referer;
  req.session.returnUrl = referer;

  res.render("vwAccount/login", {
    layout: false,
  });
});

// post login
router.post("/login", auth, async (req, res) => {
  const user = await userModel.singleByUserName(req.body.username);
  //console.log(req.body.password);
  //console.log(user);
  if (!user) {
    return res.render("vwAccount/login", {
      layout: false,
      err_message: "Invalid username or password",
    });
  }

  const result = bcrypt.compareSync(req.body.password, user.f_Password);
  if (result === false) {
    return res.render("vwAccount/login", {
      layout: false,
      err_message: "Invalid username or password",
    });
  }

  req.session.isAuth = true;
  req.session.authUser = user;

  let url = req.session.returnUrl || `/`;
  res.redirect(url);
});

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
