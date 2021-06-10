/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />
const EDU_PROGRAM_OPTIONS = [
	{
		value: 0,
		title: 'Tất cả chương trình đào tạo',
	},
	{
		value: 1,
		title: 'Data Science & Machine Learning',
	},
	{
		value: 2,
		title: 'Thiết kế đồ hoạ',
	},
	{
		value: 3,
		title: 'Internet Marketing',
	},
	{
		value: 4,
		title: 'Kiểm thử phần mêm',
	},
	{
		value: 5,
		title: 'Lập trình Website',
	},
	{
		value: 6,
		title: 'Lập trình di động',
	},
	{
		value: 7,
		title: 'Mạng máy tính',
	},
	{
		value: 8,
		title: 'Chứng chỉ quốc tế MOS',
	},
	{
		value: 9,
		title: 'Tin học văn phòng',
	},
	{
		value: 10,
		title: 'Lập trình và CSDL',
	},
];

function renderOptions(options = []) {
	let xml = '';

	options.forEach(
		(option) =>
			(xml += `<option value=${option.value}>${option.title}</option>`),
	);

	return xml;
}

$(document).ready(function () {
	// render danh sách chương trình đạo tạo cho select
	$('#eduProgramSelect').html(renderOptions(EDU_PROGRAM_OPTIONS));
});
