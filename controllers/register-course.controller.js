const { formatPrice, formatDate, convertStudyPlace } = require('../helper');
const { getUserInfo } = require('../services/common.service');
const { getClassInfo } = require('../services/register-course.service');

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
