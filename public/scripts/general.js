/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />
let flag = true;

$(document).ready(function () {
	const scrollBtn = $('#scrollBtn');

	// Sự kiện scroll và show nút scroll top
	window.addEventListener('scroll', function () {
		const pageY = window.pageYOffset;

		if (pageY > 550 && flag) {
			if (scrollBtn.hasClass('fa-chevron-circle-down')) {
				scrollBtn
					.removeClass('fa-chevron-circle-down')
					.addClass('fa-chevron-circle-up');
			}
			flag = false;
		} else if (pageY <= 550 && !flag) {
			if (scrollBtn.hasClass('fa-chevron-circle-up')) {
				scrollBtn
					.removeClass('fa-chevron-circle-up')
					.addClass('fa-chevron-circle-down');
			}
			flag = true;
		}
	});

	// scroll
	scrollBtn.click(function () {
		if ($(this).hasClass('fa-chevron-square-down')) {
			$('html,body').animate({ scrollTop: $(document).height() }, 'slow');
		} else {
			$('html,body').animate({ scrollTop: 0 }, 'slow');
		}
		return false;
	});
});
