alert("Ámbito de las variables");

var stringExterno = "Hola mundo soy una variable global" ;
var numeroExterno = 1;

function holaMundo(stringExterno) {
  var stringInterno="Texto dentro de la función";
  var numeroInterno = 100;
  console.log("El número dentro de la función es  = "+numeroInterno); //100
  console.log("El número dentro de la función es  = "+numeroExterno); //1
  console.log(stringExterno); //global #3
  console.log(stringInterno); //interno #7
  console.log("******************************************************");
}

holaMundo(stringExterno); 
// console.log(stringInterno); //**OJO** Estos .log marcarán un error ya que son variables declaradas internamente en la función, por lo tanto, no estan delcaradas de manera global y no se pueden usar fuera de la misma función
console.log(stringExterno); //Hola mundo
// console.log(numeroInterno); //**OJO** Estos .log marcarán un error ya que son variables declaradas internamente en la función, por lo tanto, no estan delcaradas de manera global y no se pueden usar fuera de la misma función
console.log(numeroExterno); //1
