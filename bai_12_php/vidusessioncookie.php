<?php
//1 sesion
session_start(); // bắt đầu session
$_SESSION['NAME'] = "user";
echo "Session Name:" . $_SESSION['NAME'];

//2.cookie
$cookieName = "user";
$cookieValue = "HaAn";
setcookie($cookieName ,$cookieValue, time () + 86400, "/");
if(isset($_COOKIE[$cookieName])){
    echo" cookie đã tồn tại";

}else{
     echo" cookie chưa được thiết lập ";

}
?>