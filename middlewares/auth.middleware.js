const { getShortUserInfo } = require('../services/common.service');

exports.userAuthenticate = async (req, res, next) => {
	try {
		const { signedCookies } = req;
		const { access_token } = signedCookies;

		// Chưa đăng nhập thì chuyển đến trang đăng nhập
		if (!access_token) {
			return res.redirect('/account/login');
		}

		// Lấy thông tin người dùng
		const user = await getShortUserInfo(access_token);
		if (!user) {
			return res.redirect('/account/login');
		}

		res.locals.user = user;
		next();
	} catch (error) {
		console.log('AUTH MIDDLEWARE ERROR: ', error);
	}
};
