exports.getLoginPage = (req, res) => {
	return res.render('login.pug', {
		title: 'Trung tâm Tin học HCMUS - Đăng nhập',
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
