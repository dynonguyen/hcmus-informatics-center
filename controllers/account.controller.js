const {
	isExistAccount,
	createAccount,
	createStudent,
} = require('../services/account.serivce');

// Lấy trang đăng nhập
exports.getLoginPage = (req, res) => {
	return res.render('login.pug', {
		title: 'Trung tâm Tin học HCMUS - Đăng nhập',
	});
};

// Lấy trang đăng ký
exports.getSignupPage = (req, res) => {
	return res.render('signup.pug', {
		title: 'Trung tâm Tin học HCMUS - Đăng ký',
	});
};

// Đăng nhập
exports.postLogin = (req, res) => {
	const { email = '', password = '' } = req.body;

	if (email === 'tuannguyentn2504@gmail.com' && password === 'ABC') {
		res.cookie('access_token', 'username');
		return res.redirect('/user/tuan-nguyen');
	} else {
		res.render('login.pug', {
			title: 'Trung tâm Tin học HCMUS - Đăng nhập',
			message: 'Mật khẩu không đúng !',
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
