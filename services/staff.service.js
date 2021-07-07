const sql = require("mssql");
const sqlConfig = require("../config/sql.config");

// Load bang diem cac hoc vien
exports.getAllStudentsMark = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    const queryStr =
      "SELECT HVMH.MA_HV, HO_TEN, HVMH.MA_MH, HVMH.DIEM_TB FROM dbo.HOC_VIEN_HOC_MH HVMH, dbo.NGUOI_DUNG WHERE HVMH.MA_HV = MA_ND";
    const result = await pool.request().query(queryStr);
    pool.close();

    const { recordset = [] } = result;

    if (recordset && recordset.length > 0) {
      let markList = [];
      recordset.forEach((item) => {
        const { MA_HV, HO_TEN, MA_MH, DIEM_TB } = item;

        if (true) {
          markList.push({
            MA_HV,
            HO_TEN,
            MA_MH,
            DIEM_TB,
          });
        }
      });
      return markList;
    }
  } catch (error) {
    throw error;
  }
};

// Load danh sach phong thi
exports.getExamRooms = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    const queryStr = "SELECT DISTINCT * FROM dbo.PHONG_THI";
    const result = await pool.request().query(queryStr);
    pool.close();

    const { recordset = [] } = result;

    if (recordset && recordset.length > 0) {
      let examRoomsList = [];
      recordset.forEach((item) => {
        const { MA_PT, MA_PHONG, MA_MH, THOI_GIAN_THI } = item;

        if (true) {
          examRoomsList.push({
            MA_PT,
            MA_PHONG,
            MA_MH,
            THOI_GIAN_THI,
          });
        }
      });
      return examRoomsList;
    }
  } catch (error) {
    throw error;
  }
};

exports.createExamRoom = async (ma_pt, ma_mh, ma_phong, tg_thi) => {
  try {
    const pool = await sql.connect(sqlConfig);
    const queryStr = `
    EXEC dbo.SP_CREATE_EXAM_ROOM
      @ma_pt = '${ma_pt}',
      @ma_mh = N'${ma_mh}',
      @ma_phong = ${ma_phong},
      @tg_thi = ${tg_thi},
    `;

    const result = await pool.request().query(queryStr);
    pool.close();

    if (result.rowsAffected[0] === 1) return true;
    return false;
  } catch (error) {
    throw error;
  }
};
