/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

$(document).ready(function () {
	const scrollBtn = $('#scrollBtn');

	// Sự kiện scroll và show nút scroll top
	window.addEventListener('scroll', function () {
		const pageY = window.pageYOffset;
		if (pageY > 550) {
			if (scrollBtn.hasClass('fa-chevron-square-down')) {
				scrollBtn
					.removeClass('fa-chevron-square-down')
					.addClass('fa-chevron-square-up');
			}
		} else {
			if (scrollBtn.hasClass('fa-chevron-square-up')) {
				scrollBtn
					.removeClass('fa-chevron-square-up')
					.addClass('fa-chevron-square-down');
			}
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
