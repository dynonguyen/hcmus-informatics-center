const { formatDate, formatPrice, convertStudyPlace } = require('../helper');
const { getAllOpenSchedule } = require('../services/course.service');

exports.getOpeningSchedulePage = async (req, res) => {
	try {
		const courseList = await getAllOpenSchedule();

		res.render('opening-schedule.pug', {
			title: 'Lịch khai giảng - Trung tâm tin học HCMUS',
			courseList: courseList || [],
			formatDate,
			formatPrice,
			convertStudyPlace,
		});
	} catch (error) {
		console.log(error);
	}
};
