const { getAllOpenSchedule } = require('../services/course.service');

exports.getOpeningSchedulePage = (req, res) => {
	try {
		await getAllOpenSchedule();

		res.render('opening-schedule.pug', {
			title: 'Lịch khai giảng - Trung tâm tin học HCMUS',
		});
	} catch (error) {}
};
