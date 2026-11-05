var danhSachPhim = [
    {
        id: 1,
        ten: "nhóc trùm trở lại trong nôi",
        anh: "../anh/anh1.1.png",
        link: "https://www.youtube.com/embed/cwqhm4yo_WQ?si=wUyxhd6tgM1vsaMr",



    },
    {
        id: 2,
        ten: " chú chó cá mập ",
        anh: "../anh/anh1.2.png",
        link: "https://www.youtube.com/embed/X-VSgGDCSIM?si=Rp-sY-yFoDqx0mGM" ,
    },
    {
        id: 3,
        ten: "mèo đi hia",
        anh: "../anh/anh1.3.png",
        link: "https://www.youtube.com/embed/Jnt8otaoLts?si=nn2VdZJl2VnCmOeF",
    },
    {
        id: 4,
        ten: "trụ cột gia đình",
        anh: "../anh/anh1.4.png",
        link: "https://www.youtube.com/embed/UnCozNDZ7L4?si=wABtn4utFR9bDg6r",
    },
    {
        id: 5,
        ten: "pikachu",
        anh: "../anh/anh1.5.png",
        link: "https://www.youtube.com/embed/wqSDbtBZaI0?si=_HCoZBg3UtZ_xRf2",
    }



];
function chonPhim(id) {
    for (let i = 0; i < danhSachPhim.length; i++) {
        if (danhSachPhim[i].id == id) {
            document.getElementsByClassName("video")[0].src = danhSachPhim[i].link;
        }
    }
}
