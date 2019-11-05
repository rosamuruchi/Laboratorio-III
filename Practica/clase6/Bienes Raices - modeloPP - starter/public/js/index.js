window.addEventListener("load",inicializarManejadores);

var frm;


function inicializarManejadores()
{
    frm =document.forms[0];
    frm.addEventListener('submit',manejadorSubmit);
}

function manejadorSubmit(e)
{
    e.preventDefault();
    let nuevoAnuncio=obtenerAnuncio(e.target);
    console.log(nuevoAnuncio);
    //altaAnuncio(nuevoAnuncio);
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState ==4 && xhr.status==200)
        {
            console.log(xhr.responseText);
        }
    }
    xhr.open('POST', 'http://localhost:3000/altaAnuncio',true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(JSON.stringify(nuevoAnuncio));
}

function obtenerAnuncio(frm)
{
    let titulo;
    let transaccion;
    let descripcion;
    let precio;
    let cantidadBaños;
    let cantidadDormitorios;
    let cantidadAutos;

    for(elemento of frm.elements)
    {
        switch(elemento.name)
        {
            case "titulo":
                titulo=elemento.value;
                break;
            case "transaccion":
                if(elemento.checked)
                {
                    transaccion=elemento.value;
                }
                
                break;
            case "descripcion":
                descripcion=elemento.value;
                break;
            case "precio":
                precio=parseInt(elemento.value);
                break;
            case "cantidadDormitorio":
                cantidadDormitorios=parseInt(elemento.value);
                break;
            case "cantidadAuto":
                cantidadAutos=parseInt(elemento.value);
                break;
            case "cantidadWc":
                cantidadBaños=parseInt(elemento.value);
                break;
            default:
                break;
        }
    }
    return new Anuncio(titulo,transaccion,descripcion,precio,cantidadBaños,cantidadAutos,cantidadDormitorios);
}

/*function altaAnuncio (anuncio)
{
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState ==4 && xhr.status==200)
        {
            console.log(xhr.responseText);
        }
    }
    xhr.open('POST', 'http://localhost:3000/altaAnuncio',true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(JSON.stringify(anuncio));
}*/

function traerAnuncios()
{
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange= () =>{
        if(xhr.readyState==4)
        {
            if(xhr.status==200)
            {
                document.getElementById("tablaDatos").innerHTML="";
                let anuncios= JSON.parse(xhr.responseText);
                document.getElementById("tablaDatos").appendChild(crearTabla(anuncios.data));

            }
            else
            {
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
    }
    xhr.open('GET', 'http://localhost:3000/traerAnuncios', true);
    xhr.send();
}

function setValues(e)
{
    let tr= e.target.parentElement;
    let nodos= tr.childNodes;

    document.getElementById("idPersona").value= nodos[0].innerText;
    document.getElementById("idPersona").hidden=false;

    document.getElementById("lblId").hidden=false;
    document.getElementById("nombre").value=nodos[1].innerText;
    document.getElementById("apellido").value=nodos[2].innerText;
    document.getElementById("edad").value=nodos[3].innerText;

    document.getElementById("btnGuardar").innerText="Guardar";
    document.getElementById("btnBorrar").hidden=false;
    frm.removeEventListener('submit',manejadorSubmit);
    frm.addEventListener('submit',manejadorModificar);
}