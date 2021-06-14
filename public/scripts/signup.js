/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

$(document).ready(function () {
	// add method for jq validation
	$.validator.addMethod(
		'phone',
		function (value, element) {
			return this.optional(element) || /0\d{9,10}/.test(value);
		},
		'Số điện thoại không hợp lệ',
	);

	$.validator.addMethod(
		'personName',
		function (value, element) {
			return (
				this.optional(element) ||
				/^([^`!@#$%^&*()\-\+\="";:/\.><,~\d])+$/gi.test(value)
			);
		},
		'Tên không chứa ký tự đặc biệt',
	);

	$.validator.addMethod(
		'birthday',
		function (value, element) {
			const age = new Date().getFullYear() - new Date(value).getFullYear();
			return this.optional(element) || age >= MIN_USER_AGE;
		},
		`Người dùng ít nhất ${MIN_USER_AGE} tuổi`,
	);

	// signup form validation
	$('#signupForm').validate({
		rules: {
			email: {
				required: true,
				email: true,
				maxlength: MAX_LEN_EMAIL,
			},
			name: {
				required: true,
				maxlength: MAX_LEN_NAME,
				personName: true,
			},
			phone: {
				required: true,
				phone: true,
			},
			address: {
				required: true,
				maxlength: MAX_LEN_ADDRESS,
			},
			gender: {
				number: true,
				range: [0, 1],
			},
			birthday: {
				required: true,
				birthday: true,
			},
			password: {
				required: true,
				minlength: MIN_LEN_PASSWORD,
				maxlength: MAX_LEN_PASSWORD,
			},
			rePassword: {
				equalTo: '#password',
			},
		},

		messages: {
			email: {
				required: 'Vui lòng nhập Email',
				email: 'Email không hợp lệ',
				maxlength: `Email không dài quá ${MAX_LEN_EMAIL} ký tự`,
			},
			name: {
				required: 'Vui lòng nhập Họ tên',
				maxlength: `Họ tên không dài quá ${MAX_LEN_NAME} ký tự`,
			},
			phone: {
				required: 'Vui lòng nhập số điện thoại',
			},
			address: {
				required: 'Vui lòng nhập địa chỉ',
				maxlength: `Địa chỉ không dài quá ${MAX_LEN_ADDRESS} ký tự`,
			},
			gender: {
				range: 'Vui lòng chọn giới tính',
			},
			birthday: {
				required: 'Vui lòng nhập ngày sinh',
			},
			password: {
				required: 'Vui lòng nhập mật khẩu',
				minlength: `Mật khẩu ít nhất ${MIN_LEN_PASSWORD} ký tự`,
				maxlength: `Mật khẩu nhiều nhất ${MAX_LEN_PASSWORD} ký tự`,
			},
			rePassword: {
				equalTo: 'Mật khẩu không khớp',
			},
		},

		submitHandler: function (form) {
			form.submit();
		},
	});
});
