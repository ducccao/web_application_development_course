const express = require("express");
const router = express.Router();
const mysql = require("mysql");

router.get("/", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "duccao",
    password: "duc123",
    database: "qlbh",
  });

  connection.connect();

  connection.query("select * from products", (er, result, fields) => {
    if (er) throw er;
    console.log(result);

    console.log("The solution is: ", result[0]);

    const products = result;

    res.render("vwProducts/index", {
      products,
      isEmpty: products.length === 0,
    });
  });

  connection.end();
});

module.exports = router;
