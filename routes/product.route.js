const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db = require("./../utils/db");

router.get("/", (req, res) => {
  const sql = "select * from products";
  const render_func = (rows) => {
    res.render("vwProducts/index", {
      products: rows,
      isEmpty: rows.length === 0,
    });
  };

  db.load(sql, render_func);
});

module.exports = router;
