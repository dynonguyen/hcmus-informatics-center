const sql = require('mssql');
const sqlConfig = require('../config/sql.config');
const randomStr = require('randomstring');
const md5 = require('md5');

exports.isExistAccount = async (email = '') => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `SELECT 1 FROM TAI_KHOAN WHERE LOWER(EMAIL) = '${email.toLowerCase()}'`;
		const result = await pool.request().query(queryStr);
		pool.close();

		if (result.recordset?.length > 0) return true;
		return false;
	} catch (error) {
		throw error;
	}
};

exports.createAccount = async (email = '', password = '') => {
	try {
		const pool = await sql.connect(sqlConfig);
		const username = randomStr.generate(20);
		const hashPw = md5(password);
		const queryStr = `
    EXEC dbo.SP_CREATE_ACCOUNT
      @email = '${email}',
      @username = '${username}',
      @password = '${hashPw}'
    `;

		const result = await pool.request().query(queryStr);
		pool.close();
		if (result.rowsAffected[0] === 1) return username;
		return '';
	} catch (error) {
		throw error;
	}
};

exports.createStudent = async (username, name, age, gender, address, phone) => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `
    EXEC dbo.SP_CREATE_STUDENT
      @username = '${username}',
      @name = N'${name}',
      @age = ${age},
      @gender = ${gender},
      @address = N'${address}',
      @phone = '${phone}'
    `;

		const result = await pool.request().query(queryStr);
		pool.close();

		if (result.rowsAffected[0] === 1) return true;
		return false;
	} catch (error) {
		throw error;
	}
};

exports.login = async (email = '', password = '') => {
	try {
		const pool = await sql.connect(sqlConfig);
		const hashPw = md5(password);
		const queryStr = `EXEC dbo.SP_LOGIN @email = '${email}', @password = '${hashPw}'`;

		const result = await pool.request().query(queryStr);
		const { recordset } = result;

		if (recordset?.length > 0) return recordset[0].USERNAME;
		return false;
	} catch (error) {
		throw error;
	}
};
