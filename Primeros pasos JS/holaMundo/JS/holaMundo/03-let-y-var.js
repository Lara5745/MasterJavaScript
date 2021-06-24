/* let permite definir variables por bloque (bloques limitados por llaves, por ejemplo, los if).
   var define variables globales que se pueden usar en cualquier bloque*/
alert("let y var");

 /************************
  ****Variables con VAR***
  *************************/
var numero=40;
console.log(numero); //40

if(true){ //siginifica que siempre se ejecutará el if
  var numero=50;
  console.log(numero); //50
}

console.log(numero); //50

/************************
 ****Variables con LET***
 *************************/
var texto="variable FUERA del bloque if";
console.log(texto); //js

if (true) {
  let texto="variable DENTRO del bloque if";
  console.log(texto); //dentro del if
}

console.log(texto); //js
