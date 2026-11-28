<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <?php
    //code cho phép viết  đây 
    // in ra màn hnhf dúng ẹho
    echo"hello world"."<br>";


    //biến $
    $hoTen = "Hà An";
    $tuoi =20;

    echo $hoTen;

    //nối chuỗi 
     echo $hoTen . " " . $tuoi . "tuổi" ."<br>";

     // toán tử 
     $soThuNhat = 10;
     $soThuHai = 5;

     $ketQua =  $soThuNhat +$soThuHai ;
     echo $ketQua."<br>";

     //
      $soThuNhat += $soThuHai;
      echo  $soThuNhat."<br>";

      $diem =5;
      if($diem <4){
        echo"trượt môn";

      }
      elseif($diem>= 4 && $diem<5 ){
        echo "D";
      }
       elseif($diem>= 5 && $diem<7 ){
        echo "C";
      }
       elseif($diem>= 7 && $diem<8 ){
        echo "B";
      }
      else{
        echo " qua môn";
      }

      echo "<br>";

      //switch case
      $color = "red";
      switch($color){
        case "red":
         echo "<br>";
         echo"IS RED";
         break;
      
         case "blue":
         echo "<br>";
         echo"IS BLUE";
         break;
      
      default:
         echo "<br>";
         echo"NOT COLOR";
         break;
      }

      // for 
      for($i=0;$i<=100;$i++){
        echo $i."<br>";
      }

    

    ?>

    
</body>
</html>