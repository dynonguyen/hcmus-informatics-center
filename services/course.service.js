const sql = require('mssql');
const sqlConfig = require('../config/sql.config');

exports.getAllOpenSchedule = async () => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = '';

		const result = await pool.request().query(queryStr);
		pool.close();

		const { recordset = [] } = result;
		console.log(result);
	} catch (error) {
		throw error;
	}
};
