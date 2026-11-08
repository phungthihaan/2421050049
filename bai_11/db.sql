-- câu lệnh tạo database
-- create database +ten db

create database if not exists netflix ;


-- nguoi_dung
create table if not exists nguoi_dung (
    id int auto_increment primary key,
    ten_dang_nhap varchar(50) not null,
    mat_khau varchar(30) not null,
    email varchar(50) not null,
    so_dien_thoai varchar(10) not null
);

--update ( xoa hết cái  gì ko cần thay đổi  )
-- vi dụ : đỏi tên đăng nhập 
-- UPDATE `nguoi_dung` SET `id`='[value-1]',`ten_dang_nhap`='[value-2]',`mat_khau`='[value-3]',`email`='[value-4]',`so_dien_thoai`='[value-5]' WHERE 1
UPDATE `nguoi_dung` SET `ten_dang_nhap`='conmeo' WHERE 1

-- phim
create table if not exists phim (
    id int auto_increment primary key,
    ten_phim varchar(100),
    thoi_luong int,
    nam int,
    gioi_thieu varchar(255),
    dao_dien_id int
);

INSERT INTO `phim`( `ten_phim`, `thoi_luong`, `nam`, `gioi_thieu`, `dao_dien_id`) VALUES ('Nhà bà nữ ','100','2021','gia đình sợ vợ','1');
INSERT INTO `phim`( `ten_phim`, `thoi_luong`, `nam`, `gioi_thieu`, `dao_dien_id`) VALUES ('quỷ ăn tạng ','100','2021','đẹp trai','2');
INSERT INTO `phim`( `ten_phim`, `thoi_luong`, `nam`, `gioi_thieu`, `dao_dien_id`) VALUES (' ','100','2021','hậu đậu','3');


-- phim_dien_vien
create table if not exists phim_dien_vien (
    id int auto_increment primary key,
    phim_id int not null,
    dien_vien_id int not null
);

-- phim_the_loai
create table if not exists phim_the_loai (
    id int auto_increment primary key,
    phim_id int not null,
    the_loai_id int not null
);
-- dao_dien
create table if not exists dao_dien (
    id int auto_increment primary key,
    ten_dao_dien varchar(50)
);

-- xóa id ( có auto_increment )
-- thêm thông tin 

INSERT INTO `dao_dien`( `ten_dao_dien`) VALUES ('NGUYỄN NHẤT');
INSERT INTO `dao_dien`( `ten_dao_dien`) VALUES ('NGUYỄN NHỊ');
INSERT INTO `dao_dien`( `ten_dao_dien`) VALUES ('NGUYỄN TAM');
INSERT INTO `dao_dien`( `ten_dao_dien`) VALUES ('NGUYỄN TỨ');
INSERT INTO `dao_dien`( `ten_dao_dien`) VALUES ('NGUYỄN NGŨ');

-- dien_vien

create table if not exists dien_vien (
    id int auto_increment primary key,
    ten_dien_vien varchar(50)
);

INSERT INTO `dien_vien`( `ten_dien_vien`) VALUES ('NGUYỄN VĂN A');
INSERT INTO `dien_vien`( `ten_dien_vien`) VALUES ('NGUYỄN VĂN B');

INSERT INTO `dien_vien`( `ten_dien_vien`) VALUES ('NGUYỄN VĂN C');

INSERT INTO `dien_vien`( `ten_dien_vien`) VALUES ('NGUYỄN VĂN D');

INSERT INTO `dien_vien`( `ten_dien_vien`) VALUES ('NGUYỄN VĂN ');

-- the_loai
create table if not exists the_loai (
    id int auto_increment primary key,
    ten_the_loai varchar(100)
);
INSERT INTO `the_loai`(`ten_the_loai`) VALUES ('gia đình ');
INSERT INTO `the_loai`( `ten_the_loai`) VALUES ('kinh dị');
INSERT INTO `the_loai`( `ten_the_loai`) VALUES ('hài hước');

-- quoc_gia
create table if not exists quoc_gia (
    id int auto_increment primary key,
    ten_quoc_gia varchar(50)
);

SELECT *
FROM phim p
JOIN phim_the_loai ptl
    ON p.id = ptl.phim_id
JOIN the_loai tl
    ON ptl.the_loai_id = tl.id
WHERE p.id = 1;