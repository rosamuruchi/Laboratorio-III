function crearTabla(array)
{
    var tabla=document.createElement("tabla");
    //tabla.className='tabla';

    let cabecera=document.createElement("tr");

    for(atributo in array[0])
    {
        let th= document.createElement("th");
        th.textContent=atributo;
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    for(var i in array)
    {
        var file =document.createElement("tr");
        var unObjeto=array[i];

        for(j in unObjeto)
        {
            var celda=document.createElement("td");
            var dato=document.createTextNode(unObjeto[j]);
            celda.appendChild(dato);
            file.appendChild(celda);
        }
        tabla.appendChild(file);
    }
    //manejador(tabla.querySelectorAll("tr"));
    return tabla;
}