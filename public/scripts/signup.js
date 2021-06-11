/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

$(document).ready(function () {
	// signup form validation
	$('#signupForm').validate({
		rules: {
			email: {
				required: true,
				email: true,
			},
		},
	});
});
