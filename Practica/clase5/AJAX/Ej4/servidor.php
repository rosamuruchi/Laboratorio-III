<?php

$nombre =$_POST['nombre'];
$apellido= $_POST['apellido'];

if(empty($nombre) || empty($apellido))
{
    echo "Por favo ingrese su Nombre y Apellido";
}
else
{
    echo "Gracias ". $nombre." ".$apellido. "!";
}

?>