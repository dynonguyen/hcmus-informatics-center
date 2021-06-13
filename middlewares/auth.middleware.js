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

exports.getUserId = async (req, res, next) => {
	try {
		const { access_token } = req.signedCookies;
		if (access_token) {
			const userInfo = await getShortUserInfo(access_token);
			if (userInfo) {
				res.locals.user = userInfo;
			} else {
				res.locals.user = null;
			}
		}
		next();
	} catch (error) {
		throw error;
	}
};
