const sql = require('mssql');
const sqlConfig = require('../config/sql.config');

exports.getAllOpenSchedule = async (type = -1) => {
	try {
		const pool = await sql.connect(sqlConfig);
		const queryStr = `EXEC dbo.SP_GET_ALL_OPEN_SCHEDULE @type = ${type}`;

		const result = await pool.request().query(queryStr);
		pool.close();

		const { recordset = [] } = result;

		if (recordset && recordset.length > 0) {
			let courseList = [];
			recordset.forEach((item) => {
				const {
					MA_KH,
					MA_LH,
					TEN_KH,
					HOC_PHI,
					MO_TA,
					TG_BAT_DAU,
					TG_KET_THUC,
					NGAY_KHAI_GIANG,
					DIA_DIEM_HOC,
					SL_DA_DANG_KY,
					THOI_GIAN_HOC,
					NGAY_KG_LH,
				} = item;

				const foundIndex = courseList.findIndex(
					(course) => course.MA_KH === MA_KH,
				);

				const lopHoc = {
					MA_LH,
					NGAY_KHAI_GIANG,
					DIA_DIEM_HOC,
					SL_DA_DANG_KY,
					THOI_GIAN_HOC,
					NGAY_KG_LH,
				};

				if (foundIndex === -1) {
					courseList.push({
						MA_KH,
						TEN_KH,
						HOC_PHI,
						MO_TA,
						TG_BAT_DAU,
						TG_KET_THUC,
						DS_LOP_HOC: [lopHoc],
					});
				} else {
					courseList[foundIndex].DS_LOP_HOC?.push(lopHoc);
				}
			});
			return courseList;
		}

		return [];
	} catch (error) {
		throw error;
	}
};
