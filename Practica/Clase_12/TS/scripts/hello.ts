/// <reference path="./bye.ts" />

let mensaje:string | number ="Hola"; //puede ser string o numero
console.log(mensaje);

///array
let vector: number[]=[1,2,3,4];

///tupla
let tupla:[number,string]=[1,"Ironman"];

///Enum
enum Eheroe{
  Xmen,
  Avenger
}
console.log("Enum..");
console.log(Eheroe.Avenger);
console.log(Eheroe[Eheroe.Avenger]);

//funciones
let funcionEnviarMision = function(heroe:string):string
{
  return heroe + "enviado";

}
let retorno:string= funcionEnviarMision("spiderman");
console.log(retorno);

for(let key in Eheroe)
{
  console.log(Eheroe);
}
