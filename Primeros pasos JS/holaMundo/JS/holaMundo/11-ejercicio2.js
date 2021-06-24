alert("Ejercicio #2\nRepetir un bucle hasta que se ingrese un número negativo.\nObtener la sumatoria de los números ingresados y la media total");

var suma=0;
var contador=0;
var media=0;
do {
  var numero=parseInt(prompt("Introduce números hasta que metas uno negativo","####"));

  if(isNaN(numero)){
    numero=0;
  }else if (numero>=0) {
    suma+=numero;
    //Lo de arriba es lo mismo que esto: suma=suma+numero;
    contador++;
    media=suma/contador;
  }
  console.log("Iteracion #"+String(contador),"|Numero ingresado:"+numero,"|Suma actual="+suma,"|Media actual="+media);
} while (numero>=0);

alert("La suma de todos los números es = "+suma+"\nLa media de todos los números es = "+suma/contador+"\nNúmero total de interaciones = "+contador);
