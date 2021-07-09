const studentRoute = require('express').Router();
const studentController = require('../controllers/student.controller');

studentRoute.get('/:id', studentController.getStudentInfo);

module.exports = studentRoute;
