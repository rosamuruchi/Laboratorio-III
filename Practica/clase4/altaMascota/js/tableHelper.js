function crearTabla (array ){
    var tabla= document.createElement("table");

    tabla.setAttribute('border', '1px solid black');
    tabla.setAttribute('style','border-collapse:collapse' );
    tabla.setAttribute('width','700px');

    let cabecera= document.createElement("tr"); //crea la cabecera de la tabla

    for(atributo in array[0]) //in :te da el nombre del atributo del objeto ; on: te da objeto
    {
        let th= document.createElement("th");
        th.textContent= atributo;
        cabecera.appendChild (th);

    }
      //agrego la cabecera
    tabla.appendChild(cabecera);

    for(var i in array)
    {
      var file = document.createElement("tr");
      var unObjeto = array[i];

      for(j in unObjeto)
      {
        var celda= document.createElement("td");
        celda.setAttribute('style','text-align:center');
        var dato= document.createTextNode(unObjeto[j]);
        celda.appendChild(dato);
        file.appendChild(celda);

      }

      tabla.appendChild(file);

    }

manejador (tabla.querySelectorAll("tr"));

    return tabla;

    //console.log(tabla);
}



