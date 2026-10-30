var danhSachPhim = [
    {
        id: 1,
        ten: "nhóc trùm trở lại trong nôi",
        anh: "../anh/anh1.1.png",
       


    },
    {
        id: 2,
        ten: " chú chó cá mập ",
        anh: "../anh/anh1.2.png",

    },
    {
        id: 3,
        ten: "mèo đi hia",
        anh: "../anh/anh1.3.png",

    },
    {
        id: 4,
        ten: "trụ cột gia đình",
        anh: "../anh/anh1.4.png",

    },
    {
        id: 5,
        ten: "pikachu",
        anh: "../anh/anh1.5.png",

    }



];
function chonPhim(id) {
    for (let i = 0; i < danhSachPhim.length; i++) {
        if (danhSachPhim[i].id == id) {
            document.getElementsByClassName("banner-img")[0].src = danhSachPhim[i].anh;
        }
    }
}
