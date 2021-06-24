alert("Condicionales");

//IF

var edad = 188;
var nombre = "David Suarez";
console.log(nombre, edad);

if (edad >= 18 && edad < 60) {
  console.log(nombre + " tiene " + edad + " años, por lo tanto es MAYOR de edad y NO es de la 3° EDAD");
} if (edad >= 18 && edad > 60) {
  console.log(nombre + " tiene " + edad + " años, por lo tanto es MAYOR de edad y SI es de la 3° EDAD");
} else {
  console.log(nombre + " tiene " + edad + " años, por lo tanto es MENOR de edad");
}

// Operadores relacionales
// <,>,<=,>=,== y !=

// Operadores lógicos
// &&, || y !=