const sql = require('mssql');
const sqlConfig = require('../config/sql.config');

exports.getShortUserInfo = async (userId = '') => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `SELECT MA_ND, HO_TEN, AVATAR, LOAI_NGUOI_DUNG FROM dbo.NGUOI_DUNG WHERE MA_ND = '${userId}'`;
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

exports.getUserInfo = async (userId = '') => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `SELECT ND.HO_TEN, TH.EMAIL, ND.SDT 
FROM dbo.NGUOI_DUNG ND JOIN dbo.TAI_KHOAN TH ON TH.USERNAME = ND.MA_ND
WHERE MA_ND = '${userId}'`;

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
