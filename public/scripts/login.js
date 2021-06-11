/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

$(document).ready(function () {
	// Xoá class báo lỗi của field nếu có
	$('#loginForm input').change(function () {
		if ($('#message').length) $('#message').empty();
	});

	// Kiểm tra dữ liệu của form trước khi submit
	$('#loginForm').submit(function (e) {
		const name = $('#name').val(),
			password = $('#password').val();
		const error =
			name === ''
				? 'Vui lòng nhập Email !'
				: password === ''
				? 'Vui lòng nhập mật khẩu !'
				: '';

		if (error !== '') {
			const errorTag = `<p class="alert alert-danger us-form-field" style="font-size:1.4rem">${error}</p>`;
			$('#message').html(errorTag);
			e.preventDefault();
			return;
		}

		$('#submitBtn').prop('disabled', true);
	});
});
