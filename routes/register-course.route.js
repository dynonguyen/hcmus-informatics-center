const registerCourseRoute = require('express').Router();
const registerCourseController = require('../controllers/register-course.controller');

registerCourseRoute.get(
	'/:courseId',
	registerCourseController.getRegisterCoursePage,
);

module.exports = registerCourseRoute;
