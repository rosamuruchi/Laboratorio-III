let selPaises;//= document.getElementById('selPaises');
let selCiudades;

window.addEventListener('load',function(){
  selPaises=document.getElementById('selPaises');
  selCiudades=document.getElementById('selCiudades');

  //selCiudades.hasChildren();

  //obtenerPaises(datos);
  cargarSelect(selPaises, obtenerPaises(datos));
  cargarSelect(selCiudades,obtenerCiudades(datos ,selPaises.value));

  selPaises.addEventListener('change', (e)=>{

    cargarSelect(selCiudades,obtenerCiudades(datos ,e.target.value));
  });

});

function obtenerPaises(arr){
  return arr.map(element=>element.pais)
  .unique()
  .sort();

  //console.log(paises);
  /*let paises= arr.map(element=>{
    return element.pais;
})*/

}

function obtenerCiudades(arr, pais){

  return arr.filter(element=>element.pais === pais)
  .map(element => element.ciudad)
  .unique()
  .sort();

}

function cargarSelect(sel, arr){

  limpiarSelect(sel);

    arr.forEach(element => {

      let opcion= document.createElement('option'); //creamos el option
      opcion.setAttribute('value', element); //seteo
      let texto= document.createTextNode(element);
      opcion.appendChild(texto);
      sel.appendChild(opcion);

    });
}

Array.prototype.unique = function(){

  return [...new Set(this)]; //devuelve un array con el elemento

}

function limpiarSelect(sel){

  while(sel.hasChildNodes())
  {
    sel.remove(sel.firstElemetChild);
  }
}
