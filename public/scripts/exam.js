/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const LS_QUESTION_KEY = 'questions';
const LS_CURRENT_KEY = 'current-question';
const LS_ANSWERED_KEY = 'answered';
const LS_SHEET = 'sheet';
let ID_MA_DE = null;
let questionLen = 0;
let questionList = [];

function countDown(deadline) {
	const dl = new Date(deadline).getTime();

	let id = setInterval(() => {
		const d = new Date().getTime();
		const diff = dl - d;
		if (diff < 0) {
			clearInterval(id);

			$.post(`http://localhost:8888/user/${userId}/submit-exam`, {
				answerList,
				examId: ID_MA_DE,
			})
				.done(function () {
					$('#confirmModalContent').html(
						'<div class="alert alert-success">Bạn đã hết giờ làm bài. Nộp bài thành công</div>',
					);

					$('#confirmModal').modal('show');

					localStorage.removeItem(LS_ANSWERED_KEY);
					localStorage.removeItem(LS_QUESTION_KEY);
					localStorage.removeItem(LS_SHEET);
					localStorage.removeItem(LS_CURRENT_KEY);
					setTimeout(() => {
						window.location.href = '/';
					}, 2000);
				})
				.fail(function () {
					$('#confirmModal').modal('show');
					$('#confirmModalContent').html(
						'<div class="alert alert-danger">Bạn đã hết giờ làm bài. Nộp bài thất bại, hãy thử lại</div>',
					);
					$('#confirmSubmitBtn').removeClass('disabled');
					setTimeout(() => {
						window.location.href = '/';
					}, 2000);
				});
		}

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
		answer += `<li data-num=${STT} data-answer="1" class="answer-item ${
			answered == '1' ? 'selected' : ''
		}"><div class="number">A</div><p class="content">${CAU_TL_1}</p></li>`;
	}
	if (CAU_TL_2 && CAU_TL_2 !== '') {
		answer += `<li data-num=${STT} data-answer="2" class="answer-item ${
			answered == '2' ? 'selected' : ''
		}"><div class="number">B</div><p class="content">${CAU_TL_2}</p></li>`;
	}
	if (CAU_TL_3 && CAU_TL_3 !== '') {
		answer += `<li data-num=${STT} data-answer="3" class="answer-item ${
			answered == '3' ? 'selected' : ''
		}"><div class="number">C</div><p class="content">${CAU_TL_3}</p></li>`;
	}
	if (CAU_TL_4 && CAU_TL_4 !== '') {
		answer += `<li data-num=${STT} data-answer="4" class="answer-item ${
			answered == '4' ? 'selected' : ''
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
			ID_MA_DE = examInfo.ID_MA_DE;
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
		let answerList = JSON.parse(localStorage.getItem(LS_ANSWERED_KEY));
		const pathSplit = window.location.pathname.split('/');
		const userId = pathSplit[2];
		$(this).addClass('disabled');

		$.post(`http://localhost:8888/user/${userId}/submit-exam`, {
			answerList,
			examId: ID_MA_DE,
		})
			.done(function () {
				$('#confirmModalContent').html(
					'<div class="alert alert-success">Nộp bài thành công</div>',
				);
				localStorage.removeItem(LS_ANSWERED_KEY);
				localStorage.removeItem(LS_QUESTION_KEY);
				localStorage.removeItem(LS_SHEET);
				localStorage.removeItem(LS_CURRENT_KEY);
				setTimeout(() => {
					window.location.href = '/';
				}, 2000);
			})
			.fail(function () {
				$('#confirmModalContent').html(
					'<div class="alert alert-danger">Nộp bài thất bại, hãy thử lại</div>',
				);
				$('#confirmSubmitBtn').removeClass('disabled');
			});
	});
});
