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

INSERT INTO dbo.TAI_KHOAN (
  USERNAME,
  EMAIL,
  MAT_KHAU,
  NGAY_TAO,
  SO_LAN_DANG_NHAP_SAI
)
VALUES
( 'C2RgRaHnGO22gKINR2RS',        -- USERNAME - varchar(20)
  'student@gmail.com',        -- EMAIL - varchar(100)
  '33dfb791754a31fee15a8013e26ddbe3',        -- MAT_KHAU - varchar(50)
  GETDATE(), -- NGAY_TAO - datetime
  0          -- SO_LAN_DANG_NHAP_SAI - smallint
  )

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
  1,   -- GIOI_TINH - sma llint
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
( 'C2RgRaHnGO22gKINR2RS',  -- MA_ND - varchar(20)
  N'Nguyễn Lê Anh Tuấn', -- HO_TEN - nvarchar(50)
  21,   -- TUOI - int
  0,   -- GIOI_TINH - smallint
  N'TX.Dĩ An, Tỉnh Bình Dương', -- DIA_CHI - nvarchar(150)
  '0377757578',  -- SDT - char(11)
  'https://res.cloudinary.com/tuan-cloudinary/image/upload/h_100,w_100,f_auto/v1625803301/avatar.png',  -- AVATAR - varchar(200)
  1    -- LOAI_NGUOI_DUNG - smallint
  )

GO

-- THEM KHOA HOC --
INSERT INTO dbo.KHOA_HOC (
  MA_KH,
  NHOM_KH,
  HOC_PHI,
  TEN_KH,
  MO_TA,
  TG_BAT_DAU,
  TG_KET_THUC
)
VALUES
( 'KH-001',        -- MA_KH - varchar(10)
  1,         -- NHOM_KH - smallint
  18600000,      -- HOC_PHI - money
  N'CHUYÊN VIÊN THIẾT KẾ WEBSITE',       -- TEN_KH - nvarchar(50)
  N'Dành cho người mới bắt đầu, Khóa 267 (KG 21/06/2021) sẽ học trực tuyến với giảng viên 100% đến khi có thông báo mới',       -- MO_TA - nvarchar(150)
  '2021-07-15', -- TG_BAT_DAU - datetime
  '2021-10-15'  -- TG_KET_THUC - datetime
  )
GO
 
INSERT INTO dbo.KHOA_HOC (
  MA_KH,
  NHOM_KH,
  HOC_PHI,
  TEN_KH,
  MO_TA,
  TG_BAT_DAU,
  TG_KET_THUC
)
VALUES
( 'KH-002',        -- MA_KH - varchar(10)
  0,         -- NHOM_KH - smallint
  25500000,      -- HOC_PHI - money
  N'Kỹ thuật viên thiết kế app mobile',       -- TEN_KH - nvarchar(50)
  N'Công cụ design for App cơ bản, Layout App UI/UX (Figma), App UI (XD), UX Motion với Premiere, Đồ Án',       -- MO_TA - nvarchar(150)
  '2021-07-16', -- TG_BAT_DAU - datetime
  '2021-11-15'  -- TG_KET_THUC - datetime
  );
GO

INSERT INTO dbo.KHOA_HOC (
  MA_KH,
  NHOM_KH,
  HOC_PHI,
  TEN_KH,
  MO_TA,
  TG_BAT_DAU,
  TG_KET_THUC
)
VALUES
( 'KH-003',        -- MA_KH - varchar(10)
  1,         -- NHOM_KH - smallint
  3350000,      -- HOC_PHI - money
  N'Thiết kế giao diện Website toàn phần',       -- TEN_KH - nvarchar(50)
  N'Thiết kế giao diện Website toàn phần',       -- MO_TA - nvarchar(150)
  '2021-07-12', -- TG_BAT_DAU - datetime
  '2021-11-12'  -- TG_KET_THUC - datetime
);
GO

-- THEM LOP HOC --
INSERT INTO dbo.LOP_HOC (
  MA_LH,
  MA_KH,
  THOI_GIAN_HOC,
  SL_TOI_DA,
  SL_DA_DANG_KY,
  NGAY_KHAI_GIANG,
  DIA_DIEM_HOC
)
VALUES
( 'LH-001',        -- MA_LH - varchar(10)
  'KH-001',        -- MA_KH - varchar(10)
  '360',        -- THOI_GIAN_HOC - varchar(10)
  35,         -- SL_TOI_DA - int
  0,         -- SL_DA_DANG_KY - int
'2021-07-15', -- NGAY_KHAI_GIANG - date
  1          -- DIA_DIEM_HOC - smallint
  );
  GO
  
INSERT INTO dbo.LOP_HOC (
  MA_LH,
  MA_KH,
  THOI_GIAN_HOC,
  SL_TOI_DA,
  SL_DA_DANG_KY,
  NGAY_KHAI_GIANG,
  DIA_DIEM_HOC
)
VALUES
( 'LH-002',        -- MA_LH - varchar(10)
  'KH-002',        -- MA_KH - varchar(10)
  '88',        -- THOI_GIAN_HOC - varchar(10)
  32,         -- SL_TOI_DA - int
  0,         -- SL_DA_DANG_KY - int
'2021-07-16', -- NGAY_KHAI_GIANG - date
  0          -- DIA_DIEM_HOC - smallint
  );
  GO

INSERT INTO dbo.LOP_HOC (
  MA_LH,
  MA_KH,
  THOI_GIAN_HOC,
  SL_TOI_DA,
  SL_DA_DANG_KY,
  NGAY_KHAI_GIANG,
  DIA_DIEM_HOC
)
VALUES
( 'LH-003',        -- MA_LH - varchar(10)
  'KH-003',        -- MA_KH - varchar(10)
  '188',        -- THOI_GIAN_HOC - varchar(10)
  45,         -- SL_TOI_DA - int
  0,         -- SL_DA_DANG_KY - int
'2021-07-16', -- NGAY_KHAI_GIANG - date
  2          -- DIA_DIEM_HOC - smallint
  );
  GO

INSERT INTO dbo.LOP_HOC (
  MA_LH,
  MA_KH,
  THOI_GIAN_HOC,
  SL_TOI_DA,
  SL_DA_DANG_KY,
  NGAY_KHAI_GIANG,
  DIA_DIEM_HOC
)
VALUES
( 'LH-004',        -- MA_LH - varchar(10)
  'KH-001',        -- MA_KH - varchar(10)
  '200',        -- THOI_GIAN_HOC - varchar(10)
  45,         -- SL_TOI_DA - int
  0,         -- SL_DA_DANG_KY - int
'2021-07-16', -- NGAY_KHAI_GIANG - date
  1          -- DIA_DIEM_HOC - smallint
  );
  GO

-- THEM PHONG HOC --
INSERT INTO dbo.PHONG_HOC (
  MA_PHONG,
  TEN_PHONG,
  SL_HV_TOI_DA
)
VALUES
( 'PH-001',  -- MA_PHONG - varchar(10)
  N'E403', -- TEN_PHONG - nvarchar(20)
  100    -- SL_HV_TOI_DA - int
  )
GO

INSERT INTO dbo.PHONG_HOC (
  MA_PHONG,
  TEN_PHONG,
  SL_HV_TOI_DA
)
VALUES
( 'PH-002',  -- MA_PHONG - varchar(10)
  N'E105', -- TEN_PHONG - nvarchar(20)
  50    -- SL_HV_TOI_DA - int
  )
GO

INSERT INTO dbo.PHONG_HOC (
  MA_PHONG,
  TEN_PHONG,
  SL_HV_TOI_DA
)
VALUES
( 'PH-003',  -- MA_PHONG - varchar(10)
  N'F205', -- TEN_PHONG - nvarchar(20)
  80    -- SL_HV_TOI_DA - int
  )
GO

-- THEM MON HOC --
INSERT INTO dbo.MON_HOC (
  MA_MH,
  MA_LH,
  TEN_MH,
  CT_MH,
  MA_PHONG,
  BUOI_HOC
)
VALUES
( 'MH-001',  -- MA_MH - varchar(10)
  'LH-001',  -- MA_LH - varchar(10)
  N'Photoshop cơ bản', -- TEN_MH - nvarchar(100)
  N'Học về các thao tác cơ bản trên Photoshop CC, đồ án cuối môn', -- CT_MH - nvarchar(200)
  'PH-001',  -- MA_PHONG - varchar(10)
  '13:00-15:30, T3, T5, T7'   -- BUOI_HOC - varchar(50)
  )
GO

INSERT INTO dbo.MON_HOC (
  MA_MH,
  MA_LH,
  TEN_MH,
  CT_MH,
  MA_PHONG,
  BUOI_HOC
)
VALUES
( 'MH-002',  -- MA_MH - varchar(10)
  'LH-001',  -- MA_LH - varchar(10)
  N'Lý thuyết về thiết kế cơ bản', -- TEN_MH - nvarchar(20)
  N'Các khái niệm về UI/UX cơ bản', -- CT_MH - nvarchar(50)
  'PH-002',  -- MA_PHONG - varchar(10)
  '13:00-15:30, T2, T6'   -- BUOI_HOC - varchar(15)
  )
GO

INSERT INTO dbo.MON_HOC (
  MA_MH,
  MA_LH,
  TEN_MH,
  CT_MH,
  MA_PHONG,
  BUOI_HOC
)
VALUES
( 'MH-003',  -- MA_MH - varchar(10)
  'LH-001',  -- MA_LH - varchar(10)
  N'Kiến thức HTML, CSS cơ bản', -- TEN_MH - nvarchar(20)
  N'Các khái niệm về HTML, CSS cơ bản', -- CT_MH - nvarchar(50)
  'PH-001',  -- MA_PHONG - varchar(10)
  '7:00-9:30, T2, T4, T6'   -- BUOI_HOC - varchar(15)
  )
GO

INSERT INTO dbo.MON_HOC (
  MA_MH,
  MA_LH,
  TEN_MH,
  CT_MH,
  MA_PHONG,
  BUOI_HOC
)
VALUES
( 'MH-004',  -- MA_MH - varchar(10)
  'LH-002',  -- MA_LH - varchar(10)
  N'Lập trình Android cơ bản', -- TEN_MH - nvarchar(20)
  N'Các khái niệm về Mobile', -- CT_MH - nvarchar(50)
  'PH-003',  -- MA_PHONG - varchar(10)
  '7:00-9:30, T2, T4, T6'   -- BUOI_HOC - varchar(15)
  )
GO

INSERT INTO dbo.MON_HOC (
  MA_MH,
  MA_LH,
  TEN_MH,
  CT_MH,
  MA_PHONG,
  BUOI_HOC
)
VALUES
( 'MH-005',  -- MA_MH - varchar(10)
  'LH-002',  -- MA_LH - varchar(10)
  N'Lập trình Android nâng cao', -- TEN_MH - nvarchar(20)
  N'Các khái niệm nâng cao về Mobile', -- CT_MH - nvarchar(50)
  'PH-003',  -- MA_PHONG - varchar(10)
  '15:00-17:30, T3, T5, T7'   -- BUOI_HOC - varchar(15)
  )
GO

-- THEM DE THI --
INSERT INTO dbo.DE_THI (
  MA_DE,
  NGAY_THI,
  TG_THI,
  MA_MH,
  PHONG_THI
)
VALUES
( 'MD-MH-001',        -- MA_DE - varchar(10)
  '2021-07-12 15:00:00', -- NGAY_THI - datetime
  60,
  'MH-001',         -- MA_MH - varchar(10),
  'PH-001'
  )
GO

INSERT INTO dbo.DE_THI (
  MA_DE,
  NGAY_THI,
  TG_THI,
  MA_MH,
  PHONG_THI
)
VALUES
( 'MD-MH-002',        -- MA_DE - varchar(10)
  '2021-07-13 09:45:00', -- NGAY_THI - datetime
  90,
  'MH-002',         -- MA_MH - varchar(10)
  'PH-002'
  )
GO

INSERT INTO dbo.DE_THI (
  MA_DE,
  NGAY_THI,
  TG_THI,
  MA_MH,
  PHONG_THI
)
VALUES
( 'MD-MH-003',        -- MA_DE - varchar(10)
  '2021-07-10 11:30:00', -- NGAY_THI - datetime
  30,
  'MH-003',         -- MA_MH - varchar(10)
  'PH-003'
  )
GO



DELETE FROM dbo.DE_THI;