const {
  getAllStudentsMark,
  getExamRooms,
  createExamRoom,
} = require("../services/staff.service");

// Tạo giao diện chính của Các nhân viên
exports.getStaffView = async (req, res) => {
  return res.render("staff.pug");
};

// Lấy bảng điểm các học viên
exports.getStudentsMark = async (req, res) => {
  try {
    const studentsMarkList = await getAllStudentsMark();

    console.log("ngoai");

    if (studentsMarkList) {
      console.log("trong");
      return res.render("students-mark.pug", {
        title: "Danh sách điểm của các học viên",
        studentsMarkList: studentsMarkList || [],
      });
    } else {
      return res.render("students-mark.pug");
    }
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};

// Lấy trang tổ chức thi GET
exports.getOrganizeExam = async (req, res) => {
  try {
    const examRoomsList = await getExamRooms();
    if (examRoomsList) {
      return res.render("organize-exam.pug", {
        title: "Tổ chức thi",
        examRoomsList: examRoomsList || [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Tổ chức thi
exports.postOrganizeExam = async (req, res) => {
  try {
    // const examRoomsList = await getExamRooms();
    // if (examRoomsList) {
    //   console.log("object");
    //   return res.render("organize-exam.pug", {
    //     title: "Tổ chức thi",
    //     examRoomsList: examRoomsList || [],
    //   });
    // }

    const { ma_pt = "", ma_mh = "", ma_phong = "", tg_thi = "" } = req.body;
    const isCreateSuccess = await createExamRoom(
      ma_pt,
      ma_mh,
      ma_phong,
      tg_thi
    );
    console.log(isCreateSuccess);
    if (isCreateSuccess) {
      res.status(200);
      res.redirect("/staff");
    } else {
      res.status(409).render("organize-exam.pug", {
        title: "Tổ chức thi",
        message: "Tổ chức thi thất bại, thử lại !",
      });
    }
  } catch (error) {
    console.error("ERROR POST: ", error);
    console.log(res.body);
    console.log("object");
    res.status(409).render("organize-exam.pug", {
      title: "Tổ chức thi",
      message: "ERROR, Tổ chức thi thất bại, thử lại !",
    });
  }
};
