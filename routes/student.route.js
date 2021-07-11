const studentRoute = require('express').Router();
const studentController = require('../controllers/student.controller');

studentRoute.get('/:id', studentController.getStudentInfo);

studentRoute.get(
	'/:id/learning-result',
	studentController.getStuLearningResult,
);

studentRoute.get('/:id/timetable', studentController.getTimeTable);

studentRoute.get('/:id/exam-calendar', studentController.getExamCalendar);

studentRoute.get('/:id/exam/:examId', studentController.getExam);

module.exports = studentRoute;
