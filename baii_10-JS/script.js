var danhSachBaiHat = [
            {
            id: 1,
                ten: "con ngựa vằn",
                    anh: "../anh/anh_you_1.png",
                        linkytb: "https://www.youtube.com/embed/w27sOwjIm9A?si=BhgAzoNj9pcD_TJd",

            },
        {
            id: 2,
                ten: "voi con và những người bạn",
                    anh: "../anh/anh_you_2.png",
                        linkytb: "https://www.youtube.com/embed/F8fbUe-zN78?si=KkSC_q9NIpocxe-s",
            },
        {
            id: 3,
                ten: "khoảnh khắc trời mưa ",
                    anh: "../anh/anh-you_3.png",
                        linkytb: "https://www.youtube.com/embed/F8fbUe-zN78?si=CmLbIK-YnTv837v8",
            },
        {
            id:4 ,
                ten: "cảnh hồ tuyệt vời ",
                    anh: "../anh/anh-you-4.png",
                        linkytb : "https://www.youtube.com/embed/ROFkjYleLPA?si=DbjszOOnEug5rqDT",
            }


        ];

        function chonBai(id){
            for(let i=0;i<danhSachBaiHat.length;i++){
                if(danhSachBaiHat[i].id==id){
                    document.getElementsByClassName("video")[0].src=danhSachBaiHat[i].linkytb;
                }
            }
        }
