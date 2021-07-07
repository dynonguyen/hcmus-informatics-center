const { MAX_COURSE_TYPE } = require("../constant");
const { formatDate, formatPrice, convertStudyPlace } = require("../helper");
const { getAllOpenSchedule } = require("../services/course.service");

exports.getOpeningSchedulePage = async (req, res) => {
  try {
    let { type = -1 } = req.query;
    // get all if type = -1
    if (isNaN(parseInt(type)) || parseInt(type) > MAX_COURSE_TYPE) type = -1;

    const courseList = await getAllOpenSchedule(type);

    res.render("opening-schedule.pug", {
      title: "Lịch khai giảng - Trung tâm tin học HCMUS",
      courseList: courseList || [],
      formatDate,
      formatPrice,
      convertStudyPlace,
    });
  } catch (error) {
    console.log(error);
  }
};
