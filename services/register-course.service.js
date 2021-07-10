const sql = require('mssql');
const sqlConfig = require('../config/sql.config');

exports.getClassInfo = async (courseId) => {
	try {
		if (!courseId || courseId === '') return null;

		const pool = await sql.connect(sqlConfig);
		const queryStr = `EXEC dbo.SP_GET_INFO_CLASS @courseId = '${courseId}'`;
		const result = await pool.request().query(queryStr);

		const { recordset } = result;
		if (recordset?.length > 0) {
			return recordset[0];
		}

		return null;
	} catch (error) {
		throw error;
	}
};

exports.isExistStudentInClass = async (userId, classId) => {
	try {
		console.log(userId);
		console.log(classId);
		const pool = await sql.connect(sqlConfig);
		const queryStr = `SELECT * FROM dbo.HV_LH WHERE MA_HV = '${userId}' AND MA_LH = '${classId}'`;
		const result = await pool.request().query(queryStr);
		console.log(result);
	} catch (error) {
		throw error;
	}
};
