alert("Funciones para el texto");

/*******************************
 ********Transformar texto******
 *******************************/

var num=25;
var text1 = "TEXTO EN MINÚSCULAS";
var text2 = "texto en mayúsculas";

var dato = num.toString(); //convertir en texto
console.log(dato);

dato = text1.toLowerCase(); //Convertir a minúsculas
console.log(dato);

dato = text2.toUpperCase(); //Convertir a mayúsculas
console.log(dato);

/*********************************
 ********Funciones con texto******
 *********************************/

 //LENGTH
 var nombre = "Lara Gómez Eduardo";
console.log(nombre.length); //Cuenta los caracteres **OJO** cuenta también los ESPACIOS

//TRIM
  var espacios = "                   esto no debe de tener espacios innecesarios                 " //Solo aplica para los espacios iniciales y finales, no espacios extras entre las palabras
console.log(espacios.trim());

//CONCATENAR
console.log(nombre+" "+espacios.trim());
// console.log(nombre.concat(" "+espacios.trim())); //Alternativa

/*********************************
 ******Funciones de busqueda******
 *********************************/

//*OJO* Si aparece -1, entonces la palabara no existe en el texto
//*OJO* Distingue mayúsculas
var texto="Pepe pica papas, Pepe pica papas";
var busquedaInicio = texto.indexOf("Pepe");
var busquedaFin = texto.lastIndexOf("Pepe"); //Donde esta la última aparición
var busquedaSearch= texto.search("Pepe"); //Lo mismo que indexOf
var busquedaMatch=texto.match("Pepe"); //Lo mismo que indexOf PERO en forma de array con muchos más detalles
var busquedaMatchG=texto.match(/Pepe/g); //Expresión regular para busqueda GLOBAL, menos detalles que el anterior match
var busquedaSub=texto.substr(10,5); //Primer número es la posición, segundo número es la cantidad de letras que quiera sacar. Resultado='papas'
var busquedaChar=texto.charAt(10); //Obtiene la letra en esa posición. Resultado='p'
var busquedaStarts=texto.startsWith("pepe"); //Verifica si el  string empieza con esto, solo da true y false. Resultado ='false' ya que distingue mayus.
var busquedaEnds=texto.endsWith("papas"); //Verifica si el  string empieza con esto, solo da true y false. Resultado ='true' tambien distingue mayus.
var busquedaIncludes=texto.includes(","); //Verifica en todo el string si se encuentra la palabra/caracter. Resultado='true', key sensitive
console.log(texto);
console.log(busquedaInicio,busquedaFin,busquedaSearch,busquedaMatch,busquedaMatchG);
console.log(busquedaSub,busquedaChar,busquedaStarts,busquedaEnds);

/*********************************
 *****Funciones de transformación******
 *********************************/

 var reemplazo=texto.replace(/Pepe/g,"Paco"); //Reemplaza todas las coincidencias. Si no uso la expresión global solo cambia la primer coincidencia
 var slice=texto.slice(10,15); //Solo muestra lo que esta dentro del rango. *OJO* Si solo hay un parametro muestra todo lo que esta delante de la posición definida
 var split=texto.split(" "); //Separa el texto tomando de referencia el parametro (en este caso es un 'espacio') y lo distribuye en un arreglo
 console.log(reemplazo);
 console.log(slice,split);