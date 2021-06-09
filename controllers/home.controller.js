// URL: /
exports.getHome = (req, res, next) => {
	return res.render('home.pug', {
		title: 'Trung tâm tin học Đại Học Khoa Học Tự Nhiên',
	});
};
