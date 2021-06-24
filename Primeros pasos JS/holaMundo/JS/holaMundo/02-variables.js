'use strict' //Activa nuevas funcionalidades Y tambien fomenta buenas prácticas ya que se vuelve mucho más estricto en las sintaxis

// Una variable es un contenedor de información

var pais = "España"; //El contenido de las variables va con doble comillas
var continente = "Europa";
var antiguedad = "2019";
var paisContinente = "El primer país registrado fue "+pais+"   Y esta en "+continente;

console.log("El país ha sido cambiado. Nuevos valores:"); // <---Imprime cosas en la consola  que se puede ver a través de console.log
pais="México"; //Ya no se pone "var" por que esa palabra reservada solo es para definir las variables, no se necesita para darles valor
continente="América";

console.log("El valor de país es = " + pais, "\nContinente = " + continente, "\nAntigüedad = " + antiguedad+"\n"+paisContinente);
alert(paisContinente);
