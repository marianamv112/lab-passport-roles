function checkRole(req, res, next) {
    let user = req.user;
  
    if (user && user.role === "Boss") {
      next();
    } else {
      res.redirect("/auth/login");
    }
  }
  
  module.exports = { checkConnected, checkRole };