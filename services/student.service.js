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
