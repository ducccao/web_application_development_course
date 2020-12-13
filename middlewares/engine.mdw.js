const express = require("express");
const expressHandlebars = require("express-handlebars");
const expressHandlebarsSections = require("express-handlebars-sections");
const numeral = require("numeral");

module.exports = function (app) {
  // engine

  app.use("/udemy", express.static("udemy"));

  app.engine(
    "hbs",
    expressHandlebars({
      defaultLayout: "main.hbs",
      extname: ".hbs",
      layoutsDir: "views/_layouts",
      partialsDir: "views/_partials",
      helpers: {
        section: expressHandlebarsSections(),
        // try to using numeral.js right there
        format(val) {
          //   console.log(val);
          return numeral(val).format("0,0");
        },
      },
    })
  );
  app.set("view engine", "hbs");
};
