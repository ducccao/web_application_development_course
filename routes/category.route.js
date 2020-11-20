const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const list = [
    { cateID: 1, cateName: "Laptop" },
    { cateID: 2, cateName: "Phone" },
    { cateID: 3, cateName: "Clothes" },
    { cateID: 4, cateName: "Shoes" },
    { cateID: 5, cateName: "Tablet" },
    { cateID: 6, cateName: "Jewelry" },
  ];

  res.render("vwCategories/index", {
    categories: list,
    isEmpty: list.length === 0,
  });
});

module.exports = router;
