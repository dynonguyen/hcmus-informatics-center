const sql = require('mssql');
const sqlConfig = require('../config/sql.config');

exports.getStudentInfo = async (userId) => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `EXEC dbo.SP_GET_STUDENT_INFO @studentId = '${userId}'`;

		const result = await pool.request().query(queryStr);
		pool.close();

		return result?.recordset[0];
	} catch (error) {
		throw error;
	}
};

exports.getLearningResult = async (userId) => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `EXEC dbo.SP_GET_LEARNING_RESULT @studentId = '${userId}'`;

		const result = await pool.request().query(queryStr);
		pool.close();

		return result?.recordset;
	} catch (error) {
		throw error;
	}
};

exports.getStudentTimetable = async (userId) => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `EXEC dbo.SP_GET_STUDENT_TIMETABLE @studentId = '${userId}'`;

		const result = await pool.request().query(queryStr);
		pool.close();

		return result?.recordset;
	} catch (error) {
		throw error;
	}
};

exports.getStuExamCalendar = async (userId) => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `EXEC dbo.SP_GET_EXAM_CALENDAR @studentId = '${userId}'`;

		const result = await pool.request().query(queryStr);
		pool.close();

		return result?.recordset;
	} catch (error) {
		throw error;
	}
};

exports.getExamInfo = async (courseId) => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `EXEC dbo.SP_GET_EXAM_INFO @courseId = '${courseId}'`;
		const result = await pool.request().query(queryStr);
		pool.close();
		return result?.recordset[0];
	} catch (error) {
		throw error;
	}
};

exports.getQuestionExam = async (examId) => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `EXEC SP_GET_QUESTIONS @examId= '${examId}'`;
		const result = await pool.request().query(queryStr);
		pool.close();
		return result?.recordset;
	} catch (error) {
		throw error;
	}
};

exports.createStudentExam = async (userId, examId) => {
	try {
		const pool = await sql.connect(sqlConfig);
		let queryStr = `EXEC dbo.SP_ADD_STUDENT_EXAM @studentId = '${userId}', @examId = ${examId}`;
		await pool.request().query(queryStr);
		queryStr = `SELECT ID_BAI_KT FROM dbo.BAI_KIEM_TRA WHERE MA_HV = '${userId}' AND ID_MA_DE = ${examId}`;
		const result = await pool.request().query(queryStr);
		return result?.recordset[0]?.ID_BAI_KT;
	} catch (error) {
		throw error;
	}
};

exports.createAnswerExam = async (examId, number, answer) => {
	try {
		const pool = await sql.connect(sqlConfig);
		let queryStr = `EXEC dbo.SP_ADD_ANSWER @stt = ${number}, @idBaiKT = ${examId}, @cauTL = ${answer}`;
		await pool.request().query(queryStr);
	} catch (error) {
		throw error;
	}
};
