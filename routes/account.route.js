const accountRoute = require('express').Router();
const accountController = require('../controllers/account.controller');

accountRoute.get('/login', accountController.getLoginPage);
accountRoute.post('/login', accountController.postLogin);

module.exports = accountRoute;
