USE QLTTTH_HCMUS;
GO

-- THEM VAO BANG TAI KHOAN --
-- TAI KHOAN GIAO VIEN
INSERT INTO dbo.TAI_KHOAN (
  USERNAME,
  EMAIL,
  MAT_KHAU,
  NGAY_TAO,
  SO_LAN_DANG_NHAP_SAI
)
VALUES
( 'gv-001',                           -- USERNAME - varchar(20)
  'gv001@gmail.com',                  -- EMAIL - varchar(100)
  '6a9b3512341dd1fe92034c0c9286958c', -- MAT_KHAU - varchar(50)
  GETDATE(),                          -- NGAY_TAO - datetime
  0                                   -- SO_LAN_DANG_NHAP_SAI - smallint
  );
GO

INSERT INTO dbo.TAI_KHOAN (
  USERNAME,
  EMAIL,
  MAT_KHAU,
  NGAY_TAO,
  SO_LAN_DANG_NHAP_SAI
)
VALUES
( 'gv-002',                           -- USERNAME - varchar(20)
  'gv002@gmail.com',                  -- EMAIL - varchar(100)
  'fbfec0ce1cb3b115b4899a0cd9926cd6', -- MAT_KHAU - varchar(50)
  GETDATE(),                          -- NGAY_TAO - datetime
  0                                   -- SO_LAN_DANG_NHAP_SAI - smallint
  );
GO

INSERT INTO dbo.TAI_KHOAN (
  USERNAME,
  EMAIL,
  MAT_KHAU,
  NGAY_TAO,
  SO_LAN_DANG_NHAP_SAI
)
VALUES
( 'gv-003',                           -- USERNAME - varchar(20)
  'gv003@gmail.com',                  -- EMAIL - varchar(100)
  'd9b0a427f7ca7ba7a6bf1c7c5a425be5', -- MAT_KHAU - varchar(50)
  GETDATE(),                          -- NGAY_TAO - datetime
  0                                   -- SO_LAN_DANG_NHAP_SAI - smallint
  );
GO

INSERT INTO dbo.TAI_KHOAN (
  USERNAME,
  EMAIL,
  MAT_KHAU,
  NGAY_TAO,
  SO_LAN_DANG_NHAP_SAI
)
VALUES
( 'gv-004',                           -- USERNAME - varchar(20)
  'gv004@gmail.com',                  -- EMAIL - varchar(100)
  '5f856c11083d7f1885007175824cdb37', -- MAT_KHAU - varchar(50)
  GETDATE(),                          -- NGAY_TAO - datetime
  0                                   -- SO_LAN_DANG_NHAP_SAI - smallint
  );
GO

INSERT INTO dbo.TAI_KHOAN (
  USERNAME,
  EMAIL,
  MAT_KHAU,
  NGAY_TAO,
  SO_LAN_DANG_NHAP_SAI
)
VALUES
( 'gv-005',                           -- USERNAME - varchar(20)
  'gv005@gmail.com',                  -- EMAIL - varchar(100)
  '49a1b9de54a7f8f066f2e7ce0ae9b983', -- MAT_KHAU - varchar(50)
  GETDATE(),                          -- NGAY_TAO - datetime
  0                                   -- SO_LAN_DANG_NHAP_SAI - smallint
  );
GO

INSERT INTO dbo.TAI_KHOAN (
  USERNAME,
  EMAIL,
  MAT_KHAU,
  NGAY_TAO,
  SO_LAN_DANG_NHAP_SAI
)
VALUES
( 'gv-006',                           -- USERNAME - varchar(20)
  'gv006@gmail.com',                  -- EMAIL - varchar(100)
  '670136256c4e767414c3837a12b67438', -- MAT_KHAU - varchar(50)
  GETDATE(),                          -- NGAY_TAO - datetime
  0                                   -- SO_LAN_DANG_NHAP_SAI - smallint
  );
GO

-- THEM BANG NGUOI DUNG --
-- GIAO VIEN
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
( 'gv-001',           -- MA_ND - varchar(20)
  N'Nguyễn Anh Khoa', -- HO_TEN - nvarchar(50)
  27,                 -- TUOI - int
  0,                  -- GIOI_TINH - smallint
  N'Hồ Chí Minh',                -- DIA_CHI - nvarchar(150)
  '0961717291',                 -- SDT - char(11)
  '/assets/images/teachers/anh_khoa.png',                 -- AVATAR - varchar(200)
  0                  -- LOAI_NGUOI_DUNG - smallint
  );
GO

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
( 'gv-002',  -- MA_ND - varchar(20)
  N'Đỗ Hữu Viên', -- HO_TEN - nvarchar(50)
  52,   -- TUOI - int
  0,   -- GIOI_TINH - smallint
  N'Hà Nội', -- DIA_CHI - nvarchar(150)
  '0712836179',  -- SDT - char(11)
  '/assets/images/teachers/Dohoa-do-huu-vien.jpg',  -- AVATAR - varchar(200)
  0    -- LOAI_NGUOI_DUNG - smallint
  );
GO

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
( 'gv-003',  -- MA_ND - varchar(20)
  N'Trần Thị Yến Nhi', -- HO_TEN - nvarchar(50)
  36,   -- TUOI - int
  1,   -- GIOI_TINH - smallint
  N'Hải Dương', -- DIA_CHI - nvarchar(150)
  '09712138461',  -- SDT - char(11)
  '/assets/images/teachers/giang-vien-lap-trinh-tran-thi-yen-nhi.png',  -- AVATAR - varchar(200)
  0    -- LOAI_NGUOI_DUNG - smallint
  )
GO

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
( 'gv-004',  -- MA_ND - varchar(20)
  N'Huỳnh Chí Nhân', -- HO_TEN - nvarchar(50)
  38,   -- TUOI - int
  0,   -- GIOI_TINH - smallint
  N'Hồ Chí Minh', -- DIA_CHI - nvarchar(150)
  '0973615841',  -- SDT - char(11)
  '/assets/images/teachers/Huynh-Chi-Nhan.jpg',  -- AVATAR - varchar(200)
  0    -- LOAI_NGUOI_DUNG - smallint
  );
GO

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
( 'gv-005',  -- MA_ND - varchar(20)
  N'Nguyễn Thị Diệu Hiên', -- HO_TEN - nvarchar(50)
  34,   -- TUOI - int
  1,   -- GIOI_TINH - smallint
  N'Đồng Nai', -- DIA_CHI - nvarchar(150)
  '0718462891',  -- SDT - char(11)
  '/assets/images/teachers/nguyen-thi-dieu-hien.jpg',  -- AVATAR - varchar(200)
  0    -- LOAI_NGUOI_DUNG - smallint
  );
GO

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
( 'gv-006',  -- MA_ND - varchar(20)
  N'Trần Thị Hồng Yến', -- HO_TEN - nvarchar(50)
  38,   -- TUOI - int
  1,   -- GIOI_TINH - smallint
  N'Hồ Chí Minh', -- DIA_CHI - nvarchar(150)
  '0738261837',  -- SDT - char(11)
  '/assets/images/teachers/tran_thi_hong_yen_lap_trinh_c.jpg',  -- AVATAR - varchar(200)
  0    -- LOAI_NGUOI_DUNG - smallint
  );
go