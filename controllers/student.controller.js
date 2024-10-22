const { formatDate, formatFullDate, strToTime } = require('../helper');
const {
	getStudentInfo: getStudentInfoService,
	getLearningResult,
	getStudentTimetable,
	getStuExamCalendar,
	getExamInfo: getExamInfoService,
	getQuestionExam: getQuestionExamService,
	createStudentExam,
	createAnswerExam,
} = require('../services/student.service');

exports.getStudentInfo = async (req, res, next) => {
	try {
		const { id } = req.params;
		if (!res.locals.user) {
			return res.render('404.pug');
		}

		const { MA_ND, LOAI_NGUOI_DUNG } = res.locals.user;
		if (LOAI_NGUOI_DUNG !== 1 || id !== MA_ND) {
			return res.render('404.pug');
		}

		const studentInfo = await getStudentInfoService(id);
		if (studentInfo) {
			return res.render('student-info.pug', {
				studentInfo,
				key: 'info',
			});
		}

		return res.render('404.pug');
	} catch (error) {
		console.error('GET STUDENT INFO ERROR: ', error);
		return res.status(503).render('404.pug');
	}
};

exports.getStuLearningResult = async (req, res, next) => {
	try {
		const { MA_ND } = res.locals?.user;
		if (!MA_ND) {
			return res.render('404.pug');
		}

		const list = await getLearningResult(MA_ND);

		return res.render('learning-result.pug', {
			key: 'result',
			list,
		});
	} catch (error) {
		console.error('GET LEARNING RESULT ERROR: ', error);
		return res.status(503).render('404.pug');
	}
};

exports.getTimeTable = async (req, res, next) => {
	try {
		const { MA_ND } = res.locals?.user;
		if (!MA_ND) {
			return res.render('404.pug');
		}

		const list = await getStudentTimetable(MA_ND);

		return res.render('timetable.pug', {
			key: 'timetable',
			list,
			formatDate,
		});
	} catch (error) {
		console.error('GET TIMETABLE ERROR: ', error);
		return res.status(503).render('404.pug');
	}
};

exports.getExamCalendar = async (req, res) => {
	try {
		const { MA_ND } = res.locals?.user;
		if (!MA_ND) {
			return res.render('404.pug');
		}

		const list = await getStuExamCalendar(MA_ND);

		return res.render('exam-calendar.pug', {
			key: 'exam',
			list: list.map((i) => ({
				...i,
				NGAY_THI: formatFullDate(`${new Date(i.NGAY_THI).toUTCString()}+0700`),
			})),
			strToTime,
		});
	} catch (error) {
		console.error('GET EXAM CALENDAR ERROR: ', error);
		return res.render('404.pug');
	}
};

exports.getExamPage = async (req, res) => {
	try {
		return res.render('exam.pug');
	} catch (error) {
		console.error('GET EXAM ERROR: ', error);
		return res.render('404.pug');
	}
};

exports.getExamInfo = async (req, res, next) => {
	try {
		const { examId } = req.params;
		if (!examId) {
			return res.status(406).json({ message: 'failed' });
		}

		const examInfo = await getExamInfoService(examId);

		return res.status(200).json({ examInfo });
	} catch (error) {
		console.error('GET EXAM INFO ERROR: ', error);
		return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
	}
};

exports.getQuestionExam = async (req, res, next) => {
	try {
		const { examId } = req.params;
		const questions = await getQuestionExamService(examId);
		return res.status(200).json({ questions });
	} catch (error) {
		console.error('GET QUESTION EXAM ERROR: ', error);
		return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
	}
};

exports.postSubmitExam = async (req, res, next) => {
	try {
		const { answerList, examId } = req.body;
		if (!answerList || !examId) {
			return res.status(406).json({ message: 'failed' });
		}

		const { MA_ND } = res.locals?.user;
		if (!MA_ND) {
			return res.status(406).json({ message: 'failed' });
		}

		// Tao bai kiem tra
		const studentExamId = await createStudentExam(MA_ND, examId);
		if (!studentExamId) {
			return res.status(406).json({ message: 'failed' });
		}

		// Tao cac cau hoi cho bai KT
		answerList.forEach((item) => {
			createAnswerExam(studentExamId, item.num, item.answer);
		});

		return res.status(200).json({ message: 'success' });
	} catch (error) {
		console.error('POST SUBMIT EXAM ERROR: ', error);
		return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
	}
};
