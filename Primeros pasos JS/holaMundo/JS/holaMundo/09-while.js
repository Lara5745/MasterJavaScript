/*****************************************************************************
 !!!!!LOS ARCHIVOS DEL 07 Y 08 FUERON OMITIDOS POR SER SWITCH Y BUCLE FOR!!!!!
 *****************************************************************************/


alert("While");
//Parecido al for pero menos estricto

//WHILE

var year=2018;
while (year<=2051) {
  console.log("El año es = "+year);
  year++; //Esto se usa para aumentar la el valor de year y así evitar la ejecución al infinito
}

//DO WHILE
var pares=0
do {
  console.log(pares);
  pares=pares+2;
} while (pares<=10);
