var x;

function foo(a, b, c){

  if(c)
  {
    c=10;
  }

  console.log(a, b,c);//arguments[0]);
}

x=foo;

x(23,null,12);








/*function Persona (nombre, apellido, edad){
  this.nombre= nombre;
  this.apellido= apellido;
  this.edad=edad,
  this.saludar= function(){
    return "Hola, me llamo " + this.nombre;
  }
}

var p1= new Persona("jose","Alvarez",34);
var p2= new Persona("maria","Tevez",36);

//Persona.prototype.altura=1.50;

p1.altura=1.67;

console.log(p1.altura);
console.log(p2.altura);*/
