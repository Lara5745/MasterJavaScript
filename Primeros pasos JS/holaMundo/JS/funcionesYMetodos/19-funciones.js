alert("Funciones");

//Conjunto de ordenes que se ejecutan al ser invocadas

var repetir = true; //variable para repetir todo el proceso
var menu = false; //variable para ingresar una opción válida para repetir el proceso
//Definir función
do {

  var numero1 = parseInt(prompt("ingresa el primer número","#"));
  var numero2 = parseInt(prompt("ingresa el segundo número","#"));
  var mostrar = prompt("¿Dónde quieres ver los resultados?","consola o documento")

    function calculadora(numero1, numero2,mostrar) { //Palabra reservada ~function~. Seguida del nombre que asignemos. Dentro del parentesis van los parametros
          if(mostrar=="consola"){ //**OJO** SÍ la var howShow esta inicializada dentro de los parametros no es necesario invocarlo a la hora de ~calculadora(numero1,numero2);~. PERO si se puede alterar de manera EXTERNA
          consola(numero1,numero2);
        } if (mostrar=="documento"){
          documento(numero1,numero2);
        }
    }

      function consola(numero1,numero2) {
        console.log("Números ingresados: " + numero1 + " y " + numero2);
        console.log("suma = " + (numero1 + numero2));
        console.log("resta = " + (numero1 - numero2));
        console.log("multiplicación = " + (numero1 * numero2));
        console.log("división = " + (numero1 / numero2));
        console.log("**************************************************");
      }

        function documento(numero1,numero2) {
          document.write("Números ingresados: " + numero1 + " y " + numero2+"<br>");
          document.write("suma = " + (numero1 + numero2)+"<br>");
          document.write("resta = " + (numero1 - numero2)+"<br>");
          document.write("multiplicación = " + (numero1 * numero2)+"<br>");
          document.write("división = " + (numero1 / numero2)+"<br>");
          document.write("**************************************************<br>");
        }

  console.log(numero1, numero2, typeof(numero1), typeof(numero2));
  calculadora(numero1, numero2,mostrar); //Llamar/invocar a la función. ***OJO** Como los parametros de la función son variables, cada vez que se invoca a la función hay que especifiar los parametros que va a recibir

  do {

    var opcion = prompt("¿Quieres repetir el proceso?","y/n")

    if (opcion == "n") {
      repetir = false;
      menu = false;
    } else if (opcion == "y") {
      repetir = true;
      menu = false;
    } else {
      alert("Opción invalida, vuelve a intentarlo");
      menu = true;
    }
  } while (menu == true);
} while (repetir == true);
