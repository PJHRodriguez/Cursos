<?php
    include 'datosConexion.php';
    $data=json_decode(file_get_contents("php://input"));
    $id=$data->id;
    $sql="SELECT datos,titulo FROM mitabla WHERE id=$id";
    $results = $conn->query($sql);

    if($results->num_rows>0){
        $row=$results->fetch_assoc();
        $miTitulo=json_decode($row['titulo']);
        $miDato=json_decode($row['datos']);
    }

    $respuesta=array(
        "elTitulo"=>$miTitulo,
        "losValores"=>$miDato
    );
    echo json_encode($respuesta);
    $conn->close();
?>