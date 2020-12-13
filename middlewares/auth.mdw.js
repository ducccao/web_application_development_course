function auth(req, res, next) {
  if (req.session.isAuth === false) {
    req.session.returnUrl = req.originalUrl;
    return res.redirect("/account/login");
  }
  next();
}

module.exports = auth;
