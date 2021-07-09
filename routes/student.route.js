const studentRoute = require('express').Router();
const studentController = require('../controllers/student.controller');

studentRoute.get('/:id', studentController.getStudentInfo);

studentRoute.get(
	'/:id/learning-result',
	studentController.getStuLearningResult,
);

module.exports = studentRoute;
