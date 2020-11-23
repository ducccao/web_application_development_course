const express = require("express");
var mysql = require("mysql");
const router = express.Router();
const db = require("./../utils/db");
const categoryModel = require("../models/category.model");

// const list = [
//   { cateID: 1, cateName: "Laptop" },
//   { cateID: 2, cateName: "Phone" },
//   { cateID: 3, cateName: "Clothes" },
//   { cateID: 4, cateName: "Shoes" },
//   { cateID: 5, cateName: "Tablet" },
//   { cateID: 6, cateName: "Jewelry" },
// ];

router.get("/", async (req, res) => {
  const all_categories = await categoryModel.all();
  res.render("vwCategories", {
    categories: all_categories,
    isEmpty: all_categories.length === 0,
  });
  // try {

  //   const all_categories = await categoryModel.all();
  //   res.render("vwCategories", {
  //     categories: all_categories,
  //     isEmpty: all_categories.length === 0,
  //   });
  // } catch (er) {
  //   console.log(er);
  //   res.send("View error at server console");
  // }

  // try {
  //   var sql = "select * from categories";

  //   const rows = await db.load(sql);
  //   console.log(rows);
  //   res.render("vwCategories/index", {
  //     categories: rows,
  //     isEmpty: rows.length === 0,
  //   });
  // } catch (er) {
  //   console.log(er);
  //   res.send("View error log at server console");
  // }

  // var sql = "select * from categories1";
  // const p = db.load(sql);
  // p.then((rows) => {
  //   res.render("vwCategories/index", {
  //     categories: rows,
  //     isEmpty: rows.length === 0,
  //   });
  // }).catch((er) => {
  //   console.log(er);
  //   res.send("View error log at server console");
  // });

  // const render_function = function (rows) {
  //   res.render("vwCategories/index", {
  //     categories: rows,
  //     isEmpty: rows.length === 0,
  //   });
  // };

  // db.load(sql, render_function);

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
