const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db = require("./../utils/db");
const productModel = require("../models/product.model");
router.get("/", async (req, res) => {
  try {
    const all_products = await productModel.all();
    res.render("vwProducts/index", {
      products: all_products,
      isEmpty: all_products.length === 0,
    });
  } catch (er) {
    console.log(er);
    res.send("View error at server console");
  }
});

module.exports = router;
