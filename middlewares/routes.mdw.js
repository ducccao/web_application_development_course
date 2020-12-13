const express = require("express");

module.exports = function (app) {
  // routers
  app.use("/public", express.static("public"));
  app.use("/account", require("./../routers/front/account.route"));
  app.use("/admin/categories", require("./../routers/category.router"));
  app.use("/admin/products", require("./../routers/product.router"));
  app.use("/products", require("./../routers/front/product.route.js"));

  //app.use(express.static("client"));
  app.get("/", (req, res) => {
    // console.log(res.locals.lcCategories);

    console.log(req.session.isAuth);
    console.log(req.session.authUser);

    res.render("home");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });
};
