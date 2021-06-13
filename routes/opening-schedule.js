const openingScheduleRoute = require('express').Router();
const openingScheduleController = require('../controllers/opening-schedule.controller');

openingScheduleRoute.get('/', openingScheduleController.getOpeningSchedulePage);

module.exports = openingScheduleRoute;
