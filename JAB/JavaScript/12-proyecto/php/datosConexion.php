<?php

$servidor="localhost";
$usuario="root";
$password="";
$bbs="valores";
$conn=new mysqli($servidor,$usuario,$password,$bbs);
if($conn-> connect_error){
    die("Conexion fallida". $conn->connect_error);
}
?>