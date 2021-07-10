USE QLTTTH_HCMUS;
GO

-- Tao tai khoan
CREATE PROCEDURE SP_CREATE_ACCOUNT 
	@email VARCHAR(100),
	@username         VARCHAR(20),
	@password         VARCHAR(50)

AS
BEGIN
    INSERT INTO dbo.TAI_KHOAN (
      USERNAME,
      EMAIL,
      MAT_KHAU,
      NGAY_TAO,
      SO_LAN_DANG_NHAP_SAI
    )
    VALUES
    ( @username,        -- USERNAME - varchar(20)
      @email,        -- EMAIL - varchar(100)
      @password,        -- MAT_KHAU - varchar(50)
      GETDATE(), -- NGAY_TAO - datetime
      0          -- SO_LAN_DANG_NHAP_SAI - smallint
      )
END;
GO

-- Tao nguoi dung
CREATE PROCEDURE SP_CREATE_STUDENT
@username VARCHAR(20), @name NVARCHAR(50), @age INT,
@gender SMALLINT, @address NVARCHAR(150), @phone CHAR(11)
AS
BEGIN
    INSERT INTO dbo.NGUOI_DUNG (
      MA_ND,
      HO_TEN,
      TUOI,
      GIOI_TINH,
      DIA_CHI,
      SDT,
      AVATAR,
      LOAI_NGUOI_DUNG
    )
    VALUES
    ( @username,  -- MA_ND - varchar(20)
      @name, -- HO_TEN - nvarchar(50)
      @age,   -- TUOI - int
      @gender,   -- GIOI_TINH - smallint
      @address, -- DIA_CHI - nvarchar(150)
      @phone,  -- SDT - char(11)
      NULL,  -- AVATAR - varchar(200)
      1    -- LOAI_NGUOI_DUNG - smallint
      )
END
GO

-- Dang nhap
CREATE PROCEDURE SP_LOGIN
@email VARCHAR(100), @password varchar(50)
AS
BEGIN
	SELECT USERNAME FROM	dbo.TAI_KHOAN WHERE  EMAIL = @email AND MAT_KHAU = @password
END
GO	

-- lay tat ca lich khai giang
CREATE PROCEDURE SP_GET_ALL_OPEN_SCHEDULE
@type SMALLINT = -1 -- Lay tat ca neu type = -1
AS
BEGIN
   SELECT
   KH.MA_KH,
  LH.MA_LH,
  KH.TEN_KH,
  KH.HOC_PHI,
  LH.NGAY_KHAI_GIANG AS NGAY_KG_LH,
  KH.MO_TA,
  KH.TG_BAT_DAU,
  KH.TG_KET_THUC,
  LH.NGAY_KHAI_GIANG,
  LH.DIA_DIEM_HOC,
  LH.SL_DA_DANG_KY,
  LH.THOI_GIAN_HOC,
  LH.SL_TOI_DA
FROM dbo.KHOA_HOC KH,
     dbo.LOP_HOC LH
WHERE KH.MA_KH = LH.MA_KH AND KH.TG_BAT_DAU >= GETDATE() AND (@type = -1 OR KH.NHOM_KH = @type)
END;
GO


-- Lay thong tin cua mot lop hoc
CREATE PROCEDURE SP_GET_INFO_CLASS
@courseId VARCHAR(10) = NULL
AS
BEGIN
    SELECT KH.HOC_PHI, LH.MA_LH, LH.THOI_GIAN_HOC, LH.NGAY_KHAI_GIANG, LH.DIA_DIEM_HOC, LH.SL_DA_DANG_KY
	FROM dbo.KHOA_HOC KH JOIN dbo.LOP_HOC LH ON LH.MA_KH = KH.MA_KH
	WHERE LH.MA_LH = @courseId
END
GO

EXEC dbo.SP_GET_INFO_CLASS @courseId = 'LH-001' -- varchar(10)
SELECT ND.HO_TEN, TH.EMAIL, ND.SDT FROM dbo.NGUOI_DUNG ND JOIN dbo.TAI_KHOAN TH ON TH.USERNAME = ND.MA_ND;


-- STAFF
SELECT BKT.ID_BAI_KT,BKT.MA_PT AS MA_PHONG_THI, BKT.MA_HV AS MA_HOC_VIEN, BKT.DIEM, BKT.LOAI_BT 
FROM dbo.BAI_KIEM_TRA BKT;
GO

---Xem cac bai kiem tra cua mot hoc vien 
CREATE PROCEDURE SP_GET_ALL_SCORE_TEST_HV
@mahv varchar(20)
AS
BEGIN
SELECT BKT.ID_BAI_KT,BKT.MA_PT AS MA_PHONG_THI, BKT.MA_HV AS MA_HOC_VIEN, BKT.DIEM, BKT.LOAI_BT 
FROM dbo.BAI_KIEM_TRA BKT
WHERE BKT.MA_HV = @mahv
END;
GO

---Xem danh sach DTB cua 1 mon hoc 
CREATE PROCEDURE SP_GET_ALL_SCORE_SUBJECT
@mamh varchar(10)
AS
BEGIN 
SELECT * 
FROM dbo.HOC_VIEN_HOC_MH HVMH
WHERE HVMH.MA_MH = @mamh;
END;
GO

---Xem danh sach DTB cua 1 hoc vien o 1 mon hoc 
CREATE PROCEDURE SP_GET_ALL_SCORE_SUBJECT_HV
@mamh varchar(10), @mahv varchar(20)
AS
BEGIN 
SELECT * 
FROM dbo.HOC_VIEN_HOC_MH HVMH
WHERE HVMH.MA_MH = @mamh AND HVMH.MA_HV = @mahv;
END;
GO

--Cap nhat diem thi o 1 bai kiem tra 
CREATE PROCEDURE SP_UPDATE_SCORE_TEST
@mabt int, @diem float
AS
BEGIN 
UPDATE dbo.BAI_KIEM_TRA
SET DIEM = @diem
WHERE ID_BAI_KT = @mabt;
END;
GO

--Danh sach tong hop hoc vien mon hoc va diem tuong ung
SELECT HVMH.MA_HV, HO_TEN, HVMH.MA_MH, HVMH.DIEM_TB
FROM dbo.HOC_VIEN_HOC_MH HVMH, dbo.NGUOI_DUNG
WHERE HVMH.MA_HV = MA_ND
GO

--To chuc thi
SELECT * FROM dbo.PHONG_THI
GO
CREATE PROCEDURE SP_CREATE_EXAM_ROOM
	@ma_pt VARCHAR(10),
	@ma_mh VARCHAR(10),
	@ma_phong VARCHAR(10),
	@tg_thi DATETIME
AS 
BEGIN
	INSERT INTO dbo.PHONG_THI
	(
	    MA_PT,
	    MA_MH,
	    MA_PHONG,
	    THOI_GIAN_THI
	)
	VALUES
	(   @ma_pt,     -- MA_PT - varchar(10)
	    @ma_mh,     -- MA_PHONG - varchar(10)
	    @ma_phong,     -- MA_MH - varchar(10)
	    @tg_thi -- THOI_GIAN_THI - datetime
	    )
END
GO

-- lay thong tin chi tiet cua mot hoc vien
CREATE PROCEDURE SP_GET_STUDENT_INFO (@studentId VARCHAR(50))
AS
BEGIN
  SELECT
    ND.MA_ND,
    TK.EMAIL,
    ND.HO_TEN,
    ND.TUOI,
    ND.GIOI_TINH,
    ND.DIA_CHI,
    ND.SDT,
	ND.AVATAR
  FROM dbo.NGUOI_DUNG ND
    JOIN dbo.TAI_KHOAN TK
      ON TK.USERNAME = ND.MA_ND
  WHERE MA_ND = @studentId
        AND LOAI_NGUOI_DUNG = 1;
END;
GO

-- lay bang diem cua hoc vien
CREATE PROCEDURE SP_GET_LEARNING_RESULT (@studentId VARCHAR(50))
AS
BEGIN
    SELECT HVMH.MA_MH, HVMH.MA_LH, MH.TEN_MH,PH.TEN_PHONG, HVMH.TINH_TRANG, HVMH.DIEM_TB
	FROM dbo.HOC_VIEN_HOC_MH HVMH,dbo.MON_HOC MH, dbo.LOP_HOC LH, dbo.PHONG_HOC PH
	WHERE HVMH.MA_HV = @studentId
		AND MH.MA_MH = HVMH.MA_MH
		AND MH.MA_LH = LH.MA_LH
		AND MH.MA_PHONG = PH.MA_PHONG
END
GO

-- lay thoi khoa bieu hoc vien
CREATE PROCEDURE SP_GET_STUDENT_TIMETABLE (@studentId VARCHAR(50))
AS
BEGIN
    SELECT HVMH.MA_MH, HVMH.MA_LH, MH.TEN_MH,PH.TEN_PHONG, LH.NGAY_KHAI_GIANG,
	 LH.THOI_GIAN_HOC, MH.BUOI_HOC
	FROM dbo.HOC_VIEN_HOC_MH HVMH,dbo.MON_HOC MH, dbo.LOP_HOC LH, dbo.PHONG_HOC PH
	WHERE HVMH.MA_HV = @studentId
		AND MH.MA_MH = HVMH.MA_MH
		AND MH.MA_LH = LH.MA_LH
		AND MH.MA_PHONG = PH.MA_PHONG
END
GO

-- dang ky khoa hoc cho hoc vien
CREATE PROCEDURE SP_REGISTER_COURSE (@studentId VARCHAR(50), @classId VARCHAR(50), @isSuccess SMALLINT = 0 OUTPUT)
AS
BEGIN
    BEGIN TRY 
		-- kiem tra so luong hoc vien da dang ky
		DECLARE @sl_toi_da INT;
		DECLARE @sl_da_dang_ky INT;

		SELECT  @sl_toi_da = SL_TOI_DA,  @sl_da_dang_ky = SL_DA_DANG_KY
		FROM dbo.LOP_HOC
		WHERE MA_LH = @classId;

		IF(@sl_da_dang_ky >= @sl_toi_da)
		    THROW 51000, N'Số lượng đăng ký đã đủ.', 1

		-- cap nhat so luong
		UPDATE dbo.LOP_HOC SET SL_DA_DANG_KY = SL_DA_DANG_KY + 1 WHERE MA_LH = @classId;
		
		-- them vao bang hv lh
		INSERT INTO dbo.HV_LH (
		  MA_HV,
		  MA_LH
		)
		VALUES
		( @studentId, -- MA_HV - varchar(20)
		  @classId  -- MA_LH - varchar(10)
		  )
		 
		-- them cac mon hoc vao bang hoc vien, mon hoc
		DECLARE cursorCourse CURSOR FOR
			SELECT MA_MH FROM dbo.MON_HOC WHERE MA_LH = 'LH-001';

		DECLARE @ma_mh VARCHAR(10);
		OPEN cursorCourse;
		FETCH NEXT FROM cursorCourse INTO @ma_mh;

		WHILE @@FETCH_STATUS = 0
		BEGIN
			INSERT INTO dbo.HOC_VIEN_HOC_MH (
			  MA_HV,
			  MA_MH,
			  MA_LH,
			  TINH_TRANG,
			  DIEM_TB
			)
			VALUES
			( @studentId,
			  @ma_mh,
			  @classId, 
			  0,
			  0.0
			);
			FETCH NEXT FROM cursorCourse INTO @ma_mh;
		END
	
		SET @isSuccess = 1;
	END TRY

	BEGIN CATCH
		THROW;
	END CATCH
END
GO

-- lay lich thi cua mot hoc vien
CREATE PROCEDURE SP_GET_EXAM_CALENDAR (@studentId VARCHAR(50))
AS
BEGIN
	SELECT DT.NGAY_THI, DT.PHONG_THI, DT.TG_THI, DT.MA_MH, HV.MA_LH, MH.TEN_MH
	FROM dbo.DE_THI DT, dbo.HOC_VIEN_HOC_MH HV, dbo.MON_HOC MH
	WHERE HV.MA_HV = @studentId AND
		HV.MA_MH = DT.MA_MH 
		AND DT.MA_MH = MH.MA_MH
END
GO

SELECT * FROM dbo.BAI_KIEM_TRA;
SELECT * FROM dbo.CAU_HOI;
SELECT * FROM dbo.CAU_TRA_LOI;
SELECT * FROM dbo.DE_THI;
SELECT * FROM dbo.PHONG_THI;
