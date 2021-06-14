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

const EDU_PROGRAM_BOX_LIST = [
	{
		to: '#',
		title: 'Thiết kế đồ hoạ',
		bgColor: '#706D3C',
		iconUrl: '/assets/icons/edu-programs/thiet_ke_do_hoa.png',
	},
	{
		to: '#',
		title: 'Mạng máy tính',
		bgColor: '#D5BC3A',
		iconUrl: '/assets/icons/edu-programs/Mang_may_tinh.png',
	},
	{
		to: '#',
		title: 'Thiết kế Website',
		bgColor: '#E65527',
		iconUrl: '/assets/icons/edu-programs/thiet_ke_website.png',
	},
	{
		to: '#',
		title: 'Internet Marketing',
		bgColor: '#5EA07F',
		iconUrl: '/assets/icons/edu-programs/Internet_Marketing.png',
	},
	{
		to: '#',
		title: 'Lập trình & CSDL',
		bgColor: '#37A5B3',
		iconUrl: '/assets/icons/edu-programs/Lap_trinh_va_CSDL.png',
	},
	{
		to: '#',
		title: 'Lập trình di động',
		bgColor: '#363948',
		iconUrl: '/assets/icons/edu-programs/Lap_trinh_di_dong.png',
	},
	{
		to: '#',
		title: 'Lập trình cho trẻ em',
		bgColor: '#1D6285',
		iconUrl: '/assets/icons/edu-programs/logo-prokids.png',
	},
	{
		to: '#',
		title: 'Tin học văn phòng',
		bgColor: '#86B3BB',
		iconUrl: '/assets/icons/edu-programs/Tin_hoc_van_phong.png',
	},
	{
		to: '#',
		title: 'Data Science & Machine Learning',
		bgColor: '#F47E01',
		iconUrl: '/assets/icons/edu-programs/machine-learning.png',
	},
	{
		to: '#',
		title: 'Tin học chuẩn quốc tế (MOS)',
		bgColor: '#CA58D2',
		iconUrl: '/assets/icons/edu-programs/Chung_chi_MOS.png',
	},
	{
		to: '#',
		title: 'Kiểm thử phần mêm',
		bgColor: '#716F84',
		iconUrl: '/assets/icons/edu-programs/Kiem_thu_phan_mem.png',
	},
	{
		to: '#',
		title: 'Đồ hoạ trẻ em',
		bgColor: '#0082C8',
		iconUrl: '/assets/icons/edu-programs/logo_artsoul.png',
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

function renderEduProgramList(list = []) {
	let xml = '';

	list.forEach((boxItem) => {
		const { to, title, bgColor, iconUrl } = boxItem;
		xml += `<a href="${to}" class="edu-program-box flex-center--col" style="background-color:${bgColor}">
		<h2 class="edu-program-box-title">${title}</h2>
		<img class="edu-program-box-icon" src="${iconUrl}" />
</a>`;
	});

	return xml;
}

$(document).ready(function () {
	// render danh sách chương trình đạo tạo cho select
	$('#eduProgramSelect').html(renderOptions(EDU_PROGRAM_OPTIONS));

	// render danh sách chương trình đào tạo
	$('#eduProgram').html(renderEduProgramList(EDU_PROGRAM_BOX_LIST));

	// bắt sự kiện thay đổi của ô chọn cơ sở
	$('#mapSelect').change(function () {
		const baseVal = $(this).val() || 'cs1';
		const address = $(this).children('option:selected')[0].textContent;

		const mapGoogleSrc =
			baseVal === 'cs1'
				? 'https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Khoa+h%E1%BB%8Dc+T%E1%BB%B1+nhi%C3%AAn+-+%C4%90H+Qu%E1%BB%91c+gia+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.7626943,106.6801512,17z/data=!3m1!4b1!4m7!1m4!3m3!1s0x31752f1c06f4e1dd:0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJBIIFF14buRYyBnaWEgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!3b1!3m1!1s0x31752f1c06f4e1dd:0x43900f1d4539a3d?hl=vi'
				: 'https://www.google.com/maps/dir//%C4%90%C3%A0o+t%E1%BA%A1o+%C4%90%E1%BB%93+h%E1%BB%8Da+-+Trung+T%C3%A2m+Tin+H%E1%BB%8Dc+-+%C4%90H+Khoa+H%E1%BB%8Dc+T%E1%BB%B1+Nhi%C3%AAn+TP.HCM/@10.7592211,106.6656649,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x0:0xbb9ce5971b969845!2m2!1d106.6666195!2d10.7592911?hl=vi';

		const mapImgSrc =
			baseVal === 'cs1'
				? '/assets/images/map/nvc.png'
				: '/assets/images/map/cs2.png';

		$('#mapImg').attr('src', mapImgSrc);
		$('#mapLink').attr('href', mapGoogleSrc);
		$('#contactAddress').text(address);
	});
});
