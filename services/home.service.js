const sql = require('mssql');
const sqlConfig = require('../config/sql.config');

exports.getTeacherList = async () => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr =
			'SELECT TOP(6) HO_TEN, AVATAR, MA_ND FROM dbo.NGUOI_DUNG WHERE LOAI_NGUOI_DUNG = 0';

		const result = await pool.request().query(queryStr);
		pool.close();

		const { recordset = [] } = result;
		return recordset.map((item) => ({
			name: item.HO_TEN,
			avt: item.AVATAR,
			link: `teacher/${item.MA_ND}`,
		}));
	} catch (error) {
		throw error;
	}
};
