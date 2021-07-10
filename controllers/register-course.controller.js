const { formatPrice, formatDate, convertStudyPlace } = require('../helper');
const { getUserInfo } = require('../services/common.service');
const {
	getClassInfo,
	isExistStudentInClass,
} = require('../services/register-course.service');

exports.getRegisterCoursePage = async (req, res) => {
	try {
		if (!res.locals.user) {
			return res.redirect('/account/login');
		}

		const userInfo = await getUserInfo(res.locals.user.MA_ND);
		if (!userInfo) {
			return res.render('404.pug');
		}
		const { courseId } = req.params;
		const classInfo = await getClassInfo(courseId);

		if (classInfo) {
			return res.render('course-register.pug', {
				title: 'Đăng ký khoá học - TTTH HCMUS',
				formatPrice,
				formatDate,
				convertStudyPlace,
				userInfo,
				classInfo,
			});
		}

		return res.render('404.pug');
	} catch (error) {
		console.error('GET REGISTER COURSE ERR:', error);
	}
};

exports.postRegisterCourse = async (req, res, next) => {
	try {
		const { classId } = req.body;
		const MA_ND = res.locals?.user?.MA_ND;
		if (!MA_ND || !classId || MA_ND === '' || classId === '') {
			return res
				.status(406)
				.json({ message: 'Đăng ký không thành công. Thử lại' });
		}

		// kiem tra hoc vien da dang ky khoa hoc chua
		const isExist = await isExistStudentInClass(MA_ND, classId);

		res.status(406).json({ message: 'Đăng ký thành công' });
	} catch (error) {
		console.error('POST REGISTER COURSE ERROR: ', error);
		return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
	}
};
