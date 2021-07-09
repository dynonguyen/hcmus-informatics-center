const {
	getStudentInfo: getStudentInfoService,
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
			});
		}

		return res.render('404.pug');
	} catch (error) {
		console.error('GET STUDENT INFO ERROR: ', error);
		return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
	}
};
