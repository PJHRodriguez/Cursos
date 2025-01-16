<?php
    $servidor = "localhost";
    $usuario ="root";
    $password = "";
    $bd="listado";

    $conn = new mysqli($servidor,$usuario,$password,$bd);
    if($conn->connect_error){
        die("La conexion ha fallado ". $conn->connect_error);
    }

    $sql="SELECT * FROM lenguajes WHERE inicio <2000 ORDER BY id ASC";
    $resultado = $conn->query($sql);

    $lenguajes =  array();
    if($resultado->num_rows >0){
        while($fila = $resultado->fetch_assoc()){
            $lenguajes[] = $fila;
        }
    }


    $conn->close();
    header('Content-type:application/json');
    echo json_encode($lenguajes);   
?>