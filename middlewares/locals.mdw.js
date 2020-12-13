const categoryModel = require("./../models/category.model");

module.exports = function (app) {
  app.use(async function (req, res, next) {
    if (req.session.isAuth === null) {
      req.session.isAuth = false;
    }
    res.locals.isAuth = req.session.isAuth;
    res.locals.authUser = req.session.authUser;

    next();
  });

  app.use(async function (req, res, next) {
    const rows = await categoryModel.allWithDetails();
    // console.log("Load cate", rows);
    // local categories - save it into local
    res.locals.lcCategories = rows;
    next();
  });
};
