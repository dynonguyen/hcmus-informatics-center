const {
	isExistAccount,
	createAccount,
	createStudent,
	login,
} = require('../services/account.serivce');

// Lấy trang đăng nhập
exports.getLoginPage = (req, res) => {
	return res.render('login.pug', {
		title: 'Đăng nhập - Trung tâm Tin học HCMUS',
	});
};

// Lấy trang đăng ký
exports.getSignupPage = (req, res) => {
	return res.render('signup.pug', {
		title: 'Đăng ký - Trung tâm Tin học HCMUS',
	});
};

// Đăng xuất
exports.getLogout = (req, res) => {
	res.clearCookie('access_token');
	res.redirect('/');
};

// Đăng nhập
exports.postLogin = async (req, res) => {
	try {
		const { email = '', password = '' } = req.body;

		const username = await login(email, password);

		if (!username) {
			return res.render('login.pug', {
				title: 'Trung tâm Tin học HCMUS - Đăng nhập',
				message: 'Mật khẩu không đúng hoặc tài khoản không tồn tại',
			});
		}

		res.cookie('access_token', username, {
			expires: new Date(Date.now() + 86400000),
			httpOnly: true,
			signed: true,
		});
		return res.redirect(`/`);
	} catch (error) {
		console.error('ERROR POST LOGIN: ', error);
		return res.render('login.pug', {
			title: 'Trung tâm Tin học HCMUS - Đăng nhập',
			message: 'Mật khẩu không đúng hoặc tài khoản không tồn tại',
		});
	}
};

// Đăng ký
exports.postSignup = async (req, res) => {
	try {
		const {
			email = '',
			name = '',
			phone = '',
			address = '',
			gender = 0,
			birthday = '',
			password = '',
		} = req.body;

		const isExistAcc = await isExistAccount(email);

		if (isExistAcc) {
			return res.status(409).render('signup.pug', {
				title: 'Trung tâm Tin học HCMUS - Đăng ký',
				message: 'Email đã tồn tại !',
			});
		}

		// Tạo tài khoản
		const username = await createAccount(email, password);
		if (username === '') {
			return res.status(409).render('signup.pug', {
				title: 'Trung tâm Tin học HCMUS - Đăng ký',
				message: 'Tạo tài khoản thất bại, thử lại !',
			});
		}

		// Tạo người dùng
		const age = new Date().getFullYear() - new Date(birthday).getFullYear();
		const isCreateSuccess = await createStudent(
			username,
			name,
			age,
			gender,
			address,
			phone,
		);

		if (isCreateSuccess) {
			res.status(200);
			res.redirect('/account/login');
		} else {
			res.status(409).render('signup.pug', {
				title: 'Trung tâm Tin học HCMUS - Đăng ký',
				message: 'Tạo tài khoản thất bại, thử lại !',
			});
		}
	} catch (error) {
		console.error('ERROR POST SIGNUP: ', error);
		res.status(409).render('signup.pug', {
			title: 'Trung tâm Tin học HCMUS - Đăng ký',
			message: 'Tạo tài khoản thất bại, thử lại !',
		});
	}
};
