<?php
    $nombre = json_decode(file_get_contents("php://input"),true);
    $dato = $nombre["lenguaje"];
    $array = $nombre["miArray"];

    $nuevoObjeto = array(
        "lenguaje" => $dato,
        "inicio" => date("Y")
    );

    $array[] = $nuevoObjeto;
    /*
    foreach($array as $fila){
        echo"<div>".$fila["lenguaje"]."(".$fila["inicio"].")"."</div>";
    }
    */
    $respuesta = json_encode($array);
    echo $respuesta;

?>