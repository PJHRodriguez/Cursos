<?php
    include 'datosConexion.php';
    $data=json_decode(file_get_contents("php://input"));
    if($data){
        $id = $data->id;
        $sql="DELETE FROM mitabla WHERE id=$id";

        $conn->query($sql);
    }
    echo"ok";
    $coon->close();
?>