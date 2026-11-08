var danhSach =[
    {id:1,
        anh:"../anh/anh1.3.png",
        link:"https://www.youtube.com/embed/w27sOwjIm9A?si=BhgAzoNj9pcD_TJd",
    },
     {id:2,
        anh:"../anh/anh1.3.png",
        link:"https://www.youtube.com/embed/F8fbUe-zN78?si=KkSC_q9NIpocxe-s",
    },
     {id:3,
        anh:"../anh/anh1.3.png",
        link:"https://www.youtube.com/embed/F8fbUe-zN78?si=CmLbIK-YnTv837v8",
    },
     {id:4,
        anh:"../anh/anh1.3.png",
        link:"https://www.youtube.com/embed/ROFkjYleLPA?si=DbjszOOnEug5rqDT",
    },
]
function chon(id){
    for(i=0;i<danhSach.length;i++){
        if(danhSach[i].id==id){
            document.getElementsByClassName("video")[0].src=danhSach[i].link;
        }
    }
}