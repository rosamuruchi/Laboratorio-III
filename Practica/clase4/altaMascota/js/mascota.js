let mascotas= [];
crearTabla(mascotas);

function Mascota(nombre,edad,tipo,castrado,vacunado,desparasitado,alimento)
{
  this.nombre=nombre;
  this.edad =edad;
  this.tipo=tipo;
  this.castrado=castrado;
  this.vacunado=vacunado;
  this.desparasitado=desparasitado;
  this.alimento=alimento;

  /*prototype.toString = function()
  {
    return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
  }*/

}




/*let m1 = new Mascota ("Bobby",3, "perro",true,false,true,"carne");

console.log(m1.toString());*/
