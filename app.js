const express = require("express");
const exhbs = require("express-handlebars");
// thằng cha này cân hếch try catch
require("express-async-errors");

const app = express();

app.engine(
  "hbs",
  exhbs({
    defaultLayout: "main.hbs",
    extname: ".hbs",
    layoutsDir: "views/_layouts",
    partialsDir: "views/_partials",
  })
);

app.use("/admin/categories", require("./routes/category.route"));
app.use("/admin/products", require("./routes/product.route"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/bs4", (req, res) => {
  console.log(req.query.show);
  const show = +req.query.show || 0;
  const visible = show !== 0;
  res.render("bs4", {
    layout: false,
    data: { visible },
  });
});

//
app.use(function (req, res) {
  res.render("404", {
    layout: false,
  });
});

// default handle error
// the last  barricade
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.render("500", {
    layout: false,
  });
});

const PORT = 1212;
app.listen(PORT, (_) => {
  console.log("App os listening at ", PORT);
});
