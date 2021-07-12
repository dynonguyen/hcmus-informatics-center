/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const LS_QUESTION_KEY = 'questions';
const LS_CURRENT_KEY = 'current-question';
const LS_ANSWERED_KEY = 'answered';
const LS_SHEET = 'sheet';
let questionLen = 0;
let questionList = [];

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

	const list = JSON.parse(localStorage.getItem(LS_ANSWERED_KEY));
	let answered = null;
	if (list && list.length > 0) {
		const index = list.findIndex((item) => item.num == STT);
		if (index !== -1) {
			answered = list[index].answer;
		}
	}

	let answer = '';

	if (CAU_TL_1 && CAU_TL_1 !== '') {
		answer += `<li data-num=${STT} data-answer="A" class="answer-item ${
			answered === 'A' ? 'selected' : ''
		}"><div class="number">A</div><p class="content">${CAU_TL_1}</p></li>`;
	}
	if (CAU_TL_2 && CAU_TL_2 !== '') {
		answer += `<li data-num=${STT} data-answer="B" class="answer-item ${
			answered === 'B' ? 'selected' : ''
		}"><div class="number">B</div><p class="content">${CAU_TL_2}</p></li>`;
	}
	if (CAU_TL_3 && CAU_TL_3 !== '') {
		answer += `<li data-num=${STT} data-answer="C" class="answer-item ${
			answered === 'C' ? 'selected' : ''
		}"><div class="number">C</div><p class="content">${CAU_TL_3}</p></li>`;
	}
	if (CAU_TL_4 && CAU_TL_4 !== '') {
		answer += `<li data-num=${STT} data-answer="D" class="answer-item ${
			answered === 'D' ? 'selected' : ''
		}"><div class="number">D</div><p class="content">${CAU_TL_4}</p></li>`;
	}

	$('#answer').html(answer);

	$('.answer-item').click(function () {
		const num = $(this).attr('data-num');
		const answer = $(this).attr('data-answer');
		let answeredList = JSON.parse(localStorage.getItem(LS_ANSWERED_KEY)) || [];
		let newAnswer = false;

		if (answeredList.length === 0) {
			answeredList.push({ num, answer });
			newAnswer = true;
		} else {
			const index = answeredList.findIndex((i) => i.num == num);
			if (index === -1) {
				answeredList.push({ num, answer });
				newAnswer = true;
			} else {
				answeredList[index].answer = answer;
			}
		}

		localStorage.setItem(LS_ANSWERED_KEY, JSON.stringify(answeredList));
		if (newAnswer) {
			renderSheet(questionLen);
		}

		$('.answer-item').removeClass('selected');
		$(this).addClass('selected');
	});
}

function renderSheet(len) {
	const answeredList = JSON.parse(localStorage.getItem(LS_ANSWERED_KEY));

	let sheet = '';
	for (let i = 0; i < len; ++i) {
		const index = answeredList
			? answeredList.findIndex((item) => item.num == i + 1)
			: -1;
		sheet += `<li data-index=${i + 1} class="sheet-item ${
			index !== -1 ? 'answered' : ''
		}">${i + 1}</li>`;
	}

	$('#sheet').html(sheet);

	// move to question by sheet
	$('.sheet-item').click(function () {
		const qIndex = Number($(this).attr('data-index'));
		renderQuestion(questionList[qIndex - 1]);

		if (qIndex === 1) {
			$('#prevBtn').addClass('disabled');
		} else if (qIndex === questionLen) {
			$('#nextBtn').addClass('disabled');
		}
	});
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
				let current = localStorage.getItem(LS_CURRENT_KEY);
				if (current === null) {
					localStorage.setItem(LS_CURRENT_KEY, 1);
					current = 1;
				}

				if (current == 1) {
					$('#prevBtn').addClass('disabled');
				}

				if (current == questions.length) {
					$('#nextBtn').addClass('disabled');
				}

				questionLen = questions.length;
				questionList = questions;
				renderQuestion(questions[current - 1]);
				renderSheet(questions.length);
			});
		})

		.fail(function () {
			window.location.href = '/notfound';
		});

	// next question
	$('#nextBtn').click(function () {
		const current = parseInt(localStorage.getItem(LS_CURRENT_KEY)) || 1;
		if (current + 1 <= questionLen) {
			renderQuestion(questionList[current]);
			localStorage.setItem(LS_CURRENT_KEY, current + 1);

			if (current + 1 === questionLen) {
				$(this).addClass('disabled');
			}

			if ($('#prevBtn').hasClass('disabled')) {
				$('#prevBtn').removeClass('disabled');
			}
		}
	});

	// prev question
	$('#prevBtn').click(function () {
		const current = parseInt(localStorage.getItem(LS_CURRENT_KEY)) || 1;

		if (current - 1 >= 0) {
			renderQuestion(questionList[current - 2]);
			localStorage.setItem(LS_CURRENT_KEY, current - 1);

			if (current - 2 === 0) {
				$(this).addClass('disabled');
			}

			if ($('#nextBtn').hasClass('disabled')) {
				$('#nextBtn').removeClass('disabled');
			}
		}
	});

	$('#submitBtn').click(function () {
		const answerList = JSON.parse(localStorage.getItem(LS_ANSWERED_KEY));
		let message =
			answerList.length < questionLen
				? 'Bạn vẫn chưa trả lời hết câu hỏi? Hãy kiểm tra lại trước khi nộp'
				: 'Vẫn còn thời gian, Bạn có chắc muốn nộp bài !';

		$('#confirmModalContent').text(message);

		$('#confirmModal').modal('show');
	});

	$('#closeModalBtn').click(function () {
		$('#confirmModal').modal('hide');
	});

	$('#confirmSubmitBtn').click(function () {
		const answerList = JSON.parse(localStorage.getItem(LS_ANSWERED_KEY));
		console.log(answerList);
		$(this).addClass('disabled');
	});
});
