/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const LS_QUESTION_KEY = 'questions';
const LS_CURRENT_KEY = 'current-question';
const LS_ANSWERED_KEY = 'answered';

function countDown(deadline) {
	const dl = new Date(deadline).getTime();

	setInterval(() => {
		const d = new Date().getTime();
		const diff = dl - d;
		const s = Math.round(diff / 1000);
		const m = Math.round(s / 60);
		$('#timeLeft').text(`${m}m ${s % 60}s`);
	}, 1000);
}

function renderQuestion(question) {
	const { STT, CAU_HOI, CAU_TL_1, CAU_TL_2, CAU_TL_3, CAU_TL_4 } = question;
	$('#questionNum').text(`Câu ${STT}`);
	$('#question').text(CAU_HOI);

	const answeredList = JSON.parse(localStorage.getItem(LS_ANSWERED_KEY));
	let answered = null;
	if (answeredList && answeredList.length > 0) {
		const index = answeredList.findIndex((item) => item.num === STT);
		if (index !== -1) {
			answered = answeredList[index].answer;
		}
	}

	let answer = '';

	if (CAU_TL_1 && CAU_TL_1 !== '') {
		answer += `<li class="answer-item ${
			answered === 'A' ? 'selected' : ''
		}"><div class="number">A</div><p class="content">${CAU_TL_1}</p></li>`;
	}
	if (CAU_TL_2 && CAU_TL_2 !== '') {
		answer += `<li class="answer-item ${
			answered === 'B' ? 'selected' : ''
		}"><div class="number">B</div><p class="content">${CAU_TL_2}</p></li>`;
	}
	if (CAU_TL_3 && CAU_TL_3 !== '') {
		answer += `<li class="answer-item ${
			answered === 'C' ? 'selected' : ''
		}"><div class="number">C</div><p class="content">${CAU_TL_3}</p></li>`;
	}
	if (CAU_TL_4 && CAU_TL_4 !== '') {
		answer += `<li class="answer-item ${
			answered === 'D' ? 'selected' : ''
		}"><div class="number">D</div><p class="content">${CAU_TL_4}</p></li>`;
	}

	$('#answer').html(answer);
}

function renderSheet(len) {
	const answeredList = JSON.parse(localStorage.getItem(LS_ANSWERED_KEY));

	let sheet = '';
	for (let i = 0; i < len; ++i) {
		const index = answeredList
			? answeredList.findIndex((item) => item.num === i + 1)
			: -1;
		sheet += `<li class="${index !== -1 ? 'answered' : ''}">${i + 1}</li>`;
	}

	$('#sheet').html(sheet);
}

$(document).ready(function () {
	$('#scrollBtn').hide();
	const pathSplit = window.location.pathname.split('/');
	const userId = pathSplit[2],
		examId = pathSplit[4];

	let examInfo = null;

	// get exam info
	$.get(`http://localhost:8888/user/${userId}/exam-info/${examId}`)
		.done(function (data) {
			examInfo = data?.examInfo;
			// Render Information
			$('#examTitle').text(`Bài kiểm tra môn ${examInfo.TEN_MH}`);

			countDown(
				`${new Date(
					new Date(examInfo.NGAY_THI).getTime() + examInfo.TG_THI * 60_000,
				).toUTCString()}+0700`,
			);

			// get question
			$.get(
				`http://localhost:8888/user/${userId}/exam-question/${examInfo.ID_MA_DE}`,
			).done(function (data) {
				const { questions } = data;
				localStorage.setItem(LS_QUESTION_KEY, JSON.stringify(questions));
				renderQuestion(questions[0]);
				renderSheet(questions.length);
			});
		})

		.fail(function () {
			window.location.href = '/notfound';
		});
});
