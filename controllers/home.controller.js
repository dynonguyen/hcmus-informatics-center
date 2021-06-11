// URL: /
exports.getHome = (req, res, next) => {
	const teacherList = [
		{
			name: 'Nguyễn Anh Khoa',
			avt: '/assets/images/teachers/anh_khoa.png',
			link: '#',
		},
		{
			name: 'Đỗ Hữu Viên',
			avt: '/assets/images/teachers/Dohoa-do-huu-vien.jpg',
			link: '#',
		},
		{
			name: 'Trần Thị Yến Nhi',
			avt: '/assets/images/teachers/giang-vien-lap-trinh-tran-thi-yen-nhi.png',
			link: '#',
		},
		{
			name: 'Huỳnh Chí Nhân',
			avt: '/assets/images/teachers/Huynh-Chi-Nhan.jpg',
			link: '#',
		},
		{
			name: 'Nguyễn Thị Diệu Hiền',
			avt: '/assets/images/teachers/nguyen-thi-dieu-hien.jpg',
			link: '#',
		},
		{
			name: 'Trần Thị Hồng Yến',
			avt: '/assets/images/teachers/tran_thi_hong_yen_lap_trinh_c.jpg',
			link: '#',
		},
	];
	const studentFeelList = [
		{
			avt: '/assets/images/student-feeling/hoc-vien-laravel-nha-phi.jpg',
			author: 'Trần Nhã Phi - Lập trình Web với Laravel Framework',
			quote:
				'Dù đã học rất nhiều khóa PHP tại Trung Tâm nhưng tôi vẫn muốn tìm hiểu thêm về mã nguồn mở PHP nên đã đăng ký học tiếp lớp Laravel Framework. Giảng viên rất nhiệt tình, bài giảng tì mỉ, bám sát với ...',
		},
		{
			avt: '/assets/images/student-feeling/hoc_vien_lap_trinh_minh_trinh.jpg',
			author: 'Dương Ngọc Minh Trinh - Lập trình C căn bản',
			quote:
				'Giáo viên dạy rất nhiệt tình và dễ hiểu, truyền đạt cho em các ví dụ và bài tập giúp em hiểu thêm về bài học và nắm vững kiến thức. Cơ sở vật chất tại trường rất tốt tạo thuận lợi rất nhiều cho việc ...',
		},
		{
			avt: '/assets/images/student-feeling/hoc-vien-testing-thien-trang.jpg',
			author: 'Nguyễn Ngọc Phương Trang - kiểm thử phầm mềm tự động',
			quote:
				'Sau 2 khóa học LCTP, em đã có 1 số kiến thức cơ bản về công việc kiểm thử phần mềm. Thầy cô giảng dạy rất nhiệt tình và truyền đạt rất nhiều kinh nghiệm thực tiễn cho học viên. Em mong trung tâm sẽ mở ...',
		},
		{
			avt: '/assets/images/student-feeling/hv_tester_tran_le_duy.jpg',
			author: 'Trần Lê Duy - Kiểm thử phần mềm cơ bản',
			quote:
				'Vì sắp làm luận án tốt nghiệp nên em đã chọn lớp LCTP2 với mục đích học để biết thêm về testing. Nhưng khi vào học thì em thấy lớp LCTP2 rất bổ ích và thấy cô dạy rất nhiệt tình, vui vẻ, làm em thích ...',
		},
	];

	return res.render('home.pug', {
		title: 'Trung tâm tin học Đại Học Khoa Học Tự Nhiên',
		teacherList,
		studentFeelList,
	});
};
