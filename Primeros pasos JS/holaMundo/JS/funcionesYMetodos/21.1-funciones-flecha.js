bienvenida = () => alert("Hola"); //FUNCIÓN SIN ARGUMENTOS

var saludo = (repuesta) => document.write("HOLA! soy la función 'saludo'!&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTu saludo es: "+ respuesta.toUpperCase()); //FUNCIÓN CON 1 ARGUMENTO, por BP la función se  guarda en una variable

var operaciones = (numero1,...resto) => { //FUNCIÓN CON ARGUMENTO REST
    var suma = Number(numero1)+Number(resto);
    console.log(typeof resto);
    console.log("Sumatoria = "+ suma)
    console.log(typeof suma);  
}

bienvenida(); //Llamada de la función en la línea 1

// FUNCIÓN INMEDIATAMENTE INVOCADA "TRADICIONAL"
// ( function () {
//     document.write("Esto es una función autoinvocada");
// })();

// FUNCIÓN INMEDIATAMENTE INVOCADA "FLECHA"
// ( ()=>{
//     document.write("Esto es una función autoinvocada<br>");
// })();

(()=>{document.write("Esto es una función autoinvocada<br>");})(); // FUNCIÓN INMEDIATAMENTE INVOCADA "FLECHA" ONE LINE

respuesta=prompt("ingresa un saludo");
console.log(typeof respuesta)
saludo(respuesta);

var num1=prompt("ingresa un número");
var num2=prompt("ingresa otro número");
console.log(typeof num1,typeof num2);
operaciones(num1,num2);
