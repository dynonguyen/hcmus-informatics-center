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
