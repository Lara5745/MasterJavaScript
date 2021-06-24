alert("Ejercicio #1\nIngresa dos números y le dire cual es mayor y menor");

var comparacion="";

while (num1<=0||isNaN(num1)) {
  var num1=parseInt(prompt("Introduce el primer número"));
  if (num1<=0||isNaN(num1)) {
    alert("DATO NO VALIDO, intentalo de nuevo");
  }
}

while (num2<=0||isNaN(num2)) {
  var num2=parseInt(prompt("Introduce el segundo número"));
  if (num2<=0||isNaN(num2)) {
    alert("DATO NO VALIDO, intentalo de nuevo");
  }
}


if (num1==num2) {
  comparacion="Los números son iguales";
} else if (num1>num2) {
  comparacion="El "+num1+" es mayor que "+num2;
} else if (num1<num2) {
  comparacion="El "+num1+" es menor que "+num2;
}

alert(comparacion);

document.write("Ingreso estos números:<br>"+num1+" y "+num2+"<br><br><br> Y la comparación correcta es:<br>"+comparacion);
