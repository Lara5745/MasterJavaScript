//FUNCIÓN INMEDIATAMENTE INVOCADA
(()=>{alert("Función inmediata 'Flecha'")})();
(function (){alert("Función inmediata 'Tradicional'")})();

//FUNCIÓN ANÓNIMA
//Para utilizar escribir ~peli("lo que sea")~ ó ~pelicula("lo que sea")~ en la consola del navegador
var peli = tit=>{ return "La peli es: " + tit}; //flecha *OJO* En esta flecha si se usa return debido a que será ejecutada en la consola, se se llama desde el código y se le mandan argumentos NO es necesario el return
var pelicula = function(titulo){return "La pelicula es: "+ titulo}; //Tradicional

//FUNCIÓN ANÓNIMA MINIMALISTA
var doble = numero=>suma=numero*2; //*OJO* A pesar de carecer de return , como en #7, esta estructura permite trabajar sin return. Se distingue por carecer de llaves
console.log(doble(2));
var texto = text=>text+"<--es mi texto";  
console.log(texto("Yo soy tu texto"));

//FUNCIÓN SIN ARGUMENTOS
testSA = () =>{document.write("Función sin argumentos 'Flecha'<br>")};
function testingSA () {document.write("Función sin argumentos 'Tradicional'<br><br>")}
testSA(); testingSA();

//FUNCIÓN CON 1 ARGUMENTO
testCA = edad => {document.write("Tienes: "+edad+" años de edad<br>")} //Flecha
function testingCA (edad2) { document.write("Tienes: "+edad2+" años de edad<br><br>")} //Tradicional

res=prompt("¿Qué edad tienes?");
testCA(res);
testingCA(res);

//FUNCIÓN CON MÁS ARGUMENTOS
testMA=(nombre,apellidoPA,apellidoMA)=>{document.write("Bienvenido "+nombre+" "+apellidoPA+" "+apellidoMA+"<br>")}; //Flecha
function testingMA (nombre,apellidoPA,apellidoMA) {document.write("Bienvenido "+nombre+" "+apellidoPA+" "+apellidoMA+"<br><br>")}; //Tradicional

testMA("Eduardo", "Lara", "Gómez");
testingMA("Eduardo", "Lara", "Gómez");

//REST & SPREAD
testREST=(uno,dos,...rest)=>{document.write("La serie numérica es: "+uno+","+dos+","+rest+"<br>"); console.log("REST VVVVVV");console.log(rest);}; //Flecha
function testingREST (uno,dos,...rest){document.write("La serie numérica es: "+uno+","+dos+","+rest+"<br><br>")}; //Tradicional

testREST(1,2,3,4,5,6,7,8,9,10);
testingREST(1,2,3,4,5,6,7,8,9,10);

testSPREAD=(once,doce,...rest)=>{document.write("La serie numérica es: "+once+","+doce+","+rest+"<br>");console.log("SPREAD VVVVVV");console.log(rest);}; //Flecha
function testingSPREAD (once,doce,...rest){document.write("La serie numérica es: "+once+","+doce+","+rest+"<br><br>");}; //Tradicional

var serie =[13,14,15,16,17,18,19,20];
testSPREAD(11,12,serie);
testingSPREAD(11,12,serie);

//CALLBACK
sumar=(num1,num2,sumaMuestra,sumaPorDos)=>{ //Función con los 2 últimos parametros callbacks (Ya que son llamados como funciones en #54)
    let suma = num1+num2;
    sumaMuestra(suma); //"suma" sería el "dato" que piden las funciones en #54 y #56
    sumaPorDos(suma);
}

var num1=8,num2=5;
sumar(num1,num2, //Mando a llamar a la función sumar, en #46, y le doy los parametros, entre ellos las 2 funciones que se usaran de callbacks
    (dato)=>{document.write("La suma de "+num1+" + "+num2+", es = "+dato+"<br>"); //Función anónima para mostrar el resultado de la suma obtenido en #46 (sumaMuestra)
},
    (dato)=>{document.write("El doble de la suma anterior es = "+dato*2+"<br><br>"); //Función anónima para mostrar el resultado de la suma obtenido en #46 * 2 (sumaPorDos)
});

// Función en una sola línea
// sumar(num1,num2,(dato)=>{document.write("La suma de "+num1+" + "+num2+", es = "+dato+"<br>");},(dato)=>{document.write("El doble de la suma anterior es = "+dato*2+"<br><br>");});

