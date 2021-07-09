const { formatDate } = require('../helper');
const {
	getStudentInfo: getStudentInfoService,
	getLearningResult,
	getStudentTimetable,
} = require('../services/student.service');

exports.getStudentInfo = async (req, res, next) => {
	try {
		const { id } = req.params;
		if (!res.locals.user) {
			return res.render('404.pug');
		}

		const { MA_ND, LOAI_NGUOI_DUNG } = res.locals.user;
		if (LOAI_NGUOI_DUNG !== 1 || id !== MA_ND) {
			return res.render('404.pug');
		}

		const studentInfo = await getStudentInfoService(id);
		if (studentInfo) {
			return res.render('student-info.pug', {
				studentInfo,
				key: 'info',
			});
		}

		return res.render('404.pug');
	} catch (error) {
		console.error('GET STUDENT INFO ERROR: ', error);
		return res.status(503).render('404.pug');
	}
};

exports.getStuLearningResult = async (req, res, next) => {
	try {
		const { MA_ND } = res.locals?.user;
		if (!MA_ND) {
			return res.render('404.pug');
		}

		const list = await getLearningResult(MA_ND);

		return res.render('learning-result.pug', {
			key: 'result',
			list,
		});
	} catch (error) {
		console.error('GET LEARNING RESULT ERROR: ', error);
		return res.status(503).render('404.pug');
	}
};

exports.getTimeTable = async (req, res, next) => {
	try {
		const { MA_ND } = res.locals?.user;
		if (!MA_ND) {
			return res.render('404.pug');
		}

		const list = await getStudentTimetable(MA_ND);

		return res.render('timetable.pug', {
			key: 'timetable',
			list,
			formatDate,
		});
	} catch (error) {
		console.error('GET TIMETABLE ERROR: ', error);
		return res.status(503).render('404.pug');
	}
};
