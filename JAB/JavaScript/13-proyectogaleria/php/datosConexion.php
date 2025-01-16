<?php
    $servername="localhost";
    $username= "root";
    $password = "";
    // Modificar "albumes" por el nombre de la bae de datos que hayas creado
    $database = "albums";
    // Escribir el resto del código PHP
    $conn = new mysqli($servername,$username,$password,$database);
    if ($conn->connect_error){
        die('Conexion fallida: ' . $conn->connect_error);
    }
?>