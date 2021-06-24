alert("Tipos de datos");

/************************
 ********Operadores******
 ************************/

//los mismos de toda la vida

var numero1 = 7; //si no tiene comillas ya lo toma como numero entero
var numero2 = 12;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multi = numero1 * numero2;
var divi = numero1 / numero2;
var resid = numero1 % numero2;

alert("El resultado de la operación " + numero1 + " + " + numero2 + " es = " + suma +
  "\nEl resultado de la operación " + numero1 + " - " + numero2 + " es = " + resta +
  "\nEl resultado de la operación " + numero1 + " * " + numero2 + " es = " + multi +
  "\nEl resultado de la operación " + numero1 + " / " + numero2 + " es = " + divi +
  "\nEl resultado de la operación " + numero1 + " % " + numero2 + " es = " + resid
);

/************************
 *****Tipos de datos*****
 *****& conversion*******
 ************************/

 //los mismos de toda la vida

 var numero_entero=44;
 var cadena_texto="Hola 'que'- tal"; //Da lo mismo si son comillas simples o dobles, soloque las comillas que se pongan primero tendrán más prioridad
 var boolean=true;

/*Existen funciones para CONVERTIR un tipo de dato a otro como Number, String, etc.
  ¡¡¡¡¡¡OJO!!!!!! las funciones deben de empezar con letra MAYÚSCULA*/

 var numero_falso="33"; //Es falso porque las comillas lo convierten en una cadena de texto
 console.log(Number(numero_falso)+7); //gracias a la función Number la operación se puede realizar y no solo se hace un simple contatenado

 var suma=numero_entero+Number(numero_falso);
 console.log(suma);

console.log(String(suma)+" <--Esto es un String"); //Gracias a la función String esto se muestra como una sola cadena de texto

console.log(numero_entero.toString(),typeof numero_entero.toString()); //Gracias a la función ~.toString()~ el número entero se convierte en String

/*******************************
 *****Detectar tipo de dato*****
 *******************************/

//Se utiliza la funcion ~typeof~

 console.log(numero_entero+"|",numero_falso+"|",cadena_texto+"|",boolean);
 console.log(typeof numero_entero+"|",typeof numero_falso+"|",typeof cadena_texto+"|",typeof boolean);
