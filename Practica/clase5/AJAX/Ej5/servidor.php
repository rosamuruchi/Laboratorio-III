<?php

$nombre =$_GET['nombre'];
$apellido= $_GET['apellido'];

if(empty($nombre) || empty($apellido))
{
    echo "Por favo ingrese su Nombre y Apellido";
}
else
{
    echo "Gracias ". $nombre." ".$apellido. "!";
}

?>