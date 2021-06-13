const homeRoute = require('express').Router();
const homeController = require('../controllers/home.controller');
const { getUserId } = require('../middlewares/auth.middleware');

homeRoute.get('/', getUserId, homeController.getHome);

module.exports = homeRoute;
