const express = require("express");
var mysql = require("mysql");
const router = express.Router();
const db = require("./../utils/db");

// const list = [
//   { cateID: 1, cateName: "Laptop" },
//   { cateID: 2, cateName: "Phone" },
//   { cateID: 3, cateName: "Clothes" },
//   { cateID: 4, cateName: "Shoes" },
//   { cateID: 5, cateName: "Tablet" },
//   { cateID: 6, cateName: "Jewelry" },
// ];

router.get("/", (req, res) => {
  const render_function = function (rows) {
    res.render("vwCategories/index", {
      categories: rows,
      isEmpty: rows.length === 0,
    });
  };

  var sql = "select * from categories";
  db.load(sql, render_function);

  // var connection = mysql.createConnection({
  //   host: "localhost",
  //   port: "3306",
  //   user: "duccao",
  //   password: "duc123",
  //   database: "qlbh",
  // });

  // connection.connect();

  // connection.query("select * from categories", (er, result, fields) => {
  //   if (er) throw er;
  //   console.log(result);

  //   console.log("The solution is: ", result[0]);

  //   const categories = result;

  //   res.render("vwCategories/index", {
  //     categories,
  //     isEmpty: categories.length === 0,
  //   });
  // });

  // connection.end();
});

module.exports = router;
