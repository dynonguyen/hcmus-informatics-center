const accountRoute = require("express").Router();
const accountController = require("../controllers/account.controller");

accountRoute.get("/login", accountController.getLoginPage);
accountRoute.get("/signup", accountController.getSignupPage);
accountRoute.get("/logout", accountController.getLogout);

accountRoute.post("/login", accountController.postLogin);
accountRoute.post("/signup", accountController.postSignup);

module.exports = accountRoute;
