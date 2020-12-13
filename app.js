const express = require("express");

const app = express();

// middle ware
// thằng cha này cân hếch try catch
require("express-async-errors");
require("./middlewares/uncleancode.mdw")(app);
require("./middlewares/session.mdw")(app);
require("./middlewares/locals.mdw")(app);
require("./middlewares/engine.mdw")(app);

// route
require("./middlewares/routes.mdw")(app);
require("./middlewares/error.mdw")(app);

// load category before do something else
// tai sao main.hbs nhan duoc lcCategories

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is start at ", PORT);
});
