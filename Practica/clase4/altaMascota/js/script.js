

window.addEventListener("load",inicializarManejadores);

var frm;

function inicializarManejadores(){

  frm= document.forms[0];
  /* Hace lo mismo para traer al formulario:
  console.log(document.forms[0]);
  console.log(document.getElementsByTagName('form')[0]);
  console.log](document.getElementsByClassName('frm')[0]);*/


  frm.addEventListener('submit', manejadorSubmit);

}

function manejadorSubmit(e){
  e.preventDefault();
  //alert("Abortamos el submit");


  let nuevaMascota= obtenerMascota (e.target);//traer informacion del formulario

  //console.log(nuevaMascota);

  mascotas.push(nuevaMascota);
  console.log(crearTabla(mascotas));
  document.getElementById("divTabla").innerHTML=crearTabla(mascotas); //limpia a los hijos de la tabla
  //document.getElementById("divTabla").innerHTML=""; //con este anda
  //document.getElementById("divTabla").appendChild(crearTabla(mascotas));
  console.log(mascotas);


}

function obtenerMascota(frm){
  let nombre;
  let edad;
  let tipo;
  let vacunado;
  let desparacitado;
  let castrado;
  let alimento;

  for( elemento of frm.elements)
  {
    switch(elemento.name)
    {
        case "nombre":
          nombre = elemento.value;
          break;
        case "edad":
            edad = parseInt(elemento.value);
            break;
        case "tipo":

          if(elemento.checked)
          {
            tipo = elemento.value;
          }
            break;
        case "castrado":
          if(elemento.checked)
          {
             castrado = elemento.checked; //checked porque es bool
          }
          break;
        case "vacunado":
            if(elemento.checked)
            {
              vacunado = elemento.checked;
            }
          break;
        case "desparacitado":
            if(elemento.checked)
            {
                desparacitado = elemento.checked;
            }
          break;
        case "alimento":
          alimento = elemento.value;
          break;
          default:
          break;
    }


  }

  return new Mascota(nombre,edad,tipo,castrado,vacunado,desparacitado,alimento);
  //console.log(frm.elements);
}

