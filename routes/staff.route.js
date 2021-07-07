const staffRoute = require("express").Router();
const staffController = require("../controllers/staff.controller");

staffRoute.get("/", staffController.getStaffView);
staffRoute.get("/students-mark", staffController.getStudentsMark);
staffRoute.get("/organize-exam", staffController.getOrganizeExam);

staffRoute.post("/organize-exam", staffController.postOrganizeExam);

module.exports = staffRoute;
