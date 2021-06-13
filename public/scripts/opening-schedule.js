/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

$(document).ready(function () {
	$('.course-header').click(function () {
		const icon = $(this).children('i');
		if (icon.hasClass('fa-chevron-circle-down')) {
			icon
				.removeClass('fa-chevron-circle-down')
				.addClass('fa-chevron-circle-up');
		} else {
			icon
				.removeClass('fa-chevron-circle-up')
				.addClass('fa-chevron-circle-down');
		}
	});
});
