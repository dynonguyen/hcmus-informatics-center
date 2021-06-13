/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const navHeight = 56;
const MENU = [
	{
		to: '#',
		title: 'Lịch khai giảng',
		subMenu: [
			{
				to: '#',
				title: 'Tin học văn phòng',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Chứng chỉ quốc tế MOS',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Lập trình & CSDL',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Internet Marketing',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Data Science & Machine Learning',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Lập trình di động',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Kiểm thử phần mềm',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Mạng máy tính',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Lập trình Website',
				iconClass: 'fas fa-calendar-alt',
			},
			{
				to: '#',
				title: 'Thiết kế đồ hoạ',
				iconClass: 'fas fa-calendar-alt',
			},
		],
	},
	{
		to: '#',
		title: 'Chương trình đào tạo',
		subMenu: [
			{
				to: '#',
				title: 'Thiết kế website',
				iconClass: 'fab fa-html5',
			},
			{
				to: '#',
				title: 'Thiết kế đồ hoạ',
				iconClass: 'fas fa-paint-brush-alt',
			},
			{
				to: '#',
				title: 'Data Science & Machine Learning',
				iconClass: 'fas fa-cogs',
			},
			{
				to: '#',
				title: 'Chứng chỉ quốc tế MOS',
				iconClass: 'fa fa-graduation-cap',
			},
			{
				to: '#',
				title: 'Lập trình & CSDL',
				iconClass: 'fa fa-database',
			},
			{
				to: '#',
				title: 'Lập trình di động',
				iconClass: 'fa fa-mobile',
			},
			{
				to: '#',
				title: 'Kiểm thử phần mềm',
				iconClass: 'fa fa-check-circle',
			},
			{
				to: '#',
				title: 'Tin học văn phòng',
				iconClass: 'fa fa-desktop',
			},
			{
				to: '#',
				title: 'Mạng máy tính',
				iconClass: 'fa fa-sitemap',
			},
			{
				to: '#',
				title: 'Internet Marketing',
				iconClass: 'fas fa-calendar-alt',
			},
		],
	},
	{
		to: '#footer',
		title: 'Liên hệ',
		subMenu: [],
	},
];

function renderNavSubMenu(subMenu = []) {
	let xml = '<ul class="sub-menu">';

	subMenu.forEach((item) => {
		xml += `<li class="sub-menu-item">
	<a href="${item.to}" >
		<i class="${item.iconClass} mr-2"></i> <span>${item.title}</span>
	</a>
</li>`;
	});

	return `${xml}</ul>`;
}

function renderNavigation(menu = []) {
	// Mắc định có nút home
	let xml =
		'<li class="header-nav-item"><a class="header-nav-link" href="/"><i class="fas fa-home"></i></a></li>';

	menu.forEach((item) => {
		xml += `<li class="header-nav-item">
	<a class="header-nav-link" href="${item.to}">
		${item.title}
	</a>
	${item.subMenu.length > 0 ? renderNavSubMenu(item.subMenu) : ''}
</li>`;
	});

	return xml;
}

$(document).ready(function () {
	// Render navigation
	$('#commonNav').html(renderNavigation(MENU));

	// Bắt sự kiên scroll để fixed header
	window.addEventListener('scroll', function () {
		const currentOffsetY = window.pageYOffset;
		const navigation = $('#headerNavWrapper');

		if (currentOffsetY > navHeight) {
			if (!navigation.hasClass('fixed')) {
				navigation.addClass('fixed');
				$('header').css('margin-bottom', `${navHeight}px`);
			}
		} else {
			if (navigation.hasClass('fixed')) {
				navigation.removeClass('fixed');
				$('header').css('margin-bottom', 0);
			}
		}
	});
});
