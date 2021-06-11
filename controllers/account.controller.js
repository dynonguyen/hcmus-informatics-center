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
		return res.redirect('/');
	} else {
		res.render('login.pug', {
			title: 'Trung tâm Tin học HCMUS - Đăng nhập',
			message: 'Mật khẩu không đúng !',
		});
	}
};

// Đăng ký
exports.postSignup = (req, res) => {
	const data = req.body;
	console.log(data);
};
