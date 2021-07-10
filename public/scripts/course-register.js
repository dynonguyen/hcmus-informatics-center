/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const REGISTER_API_URL = 'http://localhost:8888/register-course';

$(document).ready(function () {
	$('#paymentBtn').click(function () {
		$('#paymentModal .us-btn').addClass('disabled');
		$('#loadIcon').removeClass('d-none').addClass('ani-spin');

		const classId = $(this).attr('data-class-id');
		const userId = $(this).attr('data-user-id');

		// call API
		$.post(REGISTER_API_URL, {
			classId,
		})
			.done(function (data, status) {
				if (status === 'success' || data) {
					const xml = `<div class="alert alert-success">${
						data.message || 'Đăng ký thành công'
					}</div>`;
					$('#registerMessage').removeClass('d-none').html(xml);

					setTimeout(() => {
						window.location.href = `/user/${userId}/timetable`;
					}, 2000);
				}
			})
			.fail(function (error) {
				const xml = `<div class="alert alert-danger">${
					error?.responseJSON?.message || 'Đăng ký thất bại, thử lại !'
				}</div>`;
				$('#registerMessage').removeClass('d-none').html(xml);
				$('#paymentModal .us-btn').removeClass('disabled');
				$('#loadIcon').addClass('d-none').removeClass('ani-spin');

				setTimeout(() => {
					$('#registerMessage').addClass('d-none');
				}, 3000);
			});
	});
});
