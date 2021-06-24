alert("Funcioes anónimas");

//Función que no tiene nombre y que se puede almacenar en una varible. Comunmente usado para CALLBACKS (funcíon que se ejecuta dentro de otra)

var pelicula = function(titulo) { //Esto ya es una función anónima ya que carece de nomnbre
  return "La película es: " + titulo; //Al ser llamada desde la consola con ~pelicula("título"); se ejecutara el return~
};

var peli = tit=>{return "La peli es: " + tit}; //Función anónima **FLECHA**

/***********************************************************************
 ********************************Call backs*****************************
 *******(funcíon que se ejecuta dentro de otra y no tiene nombre)*******
  **********************************************************************/

function sumar(numero1, numero2, sumaYMuestra, sumaPorDos) { //Los últimos 2 parametros son callbacks ya que se obtienen de una función ajena en la que se estan mencionando
  var resultado = numero1 + numero2;
  sumaYMuestra(resultado); //Callback. ~resultado~ es lo que se almacena en ~dato~ a partir de la línea #20 hasta la #21
  sumaPorDos(resultado); //Callback. ~resultado~ es lo que se almacena en ~dato~ a partir de la línea #22 hasta la #23
}

//en estos atributos se incluyen las funciones anónimas correspondientes a ~sumaYmuestra~ & ~sumaPorDos~
sumar(5, 7, function(dato) { //Esta función anónima de ~sumaYMuestra~
  console.log("La suma es = ", dato);
}, function(dato) { //Esta función anónima de ~sumaPorDos~
  console.log("La suma por dos es = ", dato * 2);
});

/******************************
 ********Funciones flecha******
 ******************************/
//Es lo mismo que una Fuction ordinaria pero se sustiuye la palabra ~function~, y sus parentesis, por ~=>~
var series = titulo => { //Esto ya es una función anónima ya que carece de nomnbre
  return "La serie es: " + titulo; //Al ser llamada desde la consola con ~pelicula("título"); se ejecutara el return~
}


  sumar = (numero1, numero2, sumaYMuestra, sumaPorDos) => { //Los últimos 2 atributos son callbacks ya que se obtienen de una función ajena en la que se estan mencionando
  var resultado = numero1 + numero2;
  sumaYMuestra(resultado); //Callback. ~resultado~ es lo que se almacena en ~dato~ a partir de la línea #20 hasta la #21
  sumaPorDos(resultado); //Callback. ~resultado~ es lo que se almacena en ~dato~ a partir de la línea #22 hasta la #23
}

//en estos atributos se incluyen las funciones anónimas correspondientes a ~sumaYmuestra~ & ~sumaPorDos~
sumar(5, 7, dato => { //Esta función anónima de ~sumaYMuestra~
  console.log("La suma es = ", dato);
}, dato => { //Esta función anónima de ~sumaPorDos~
  console.log("La suma por dos es = ", dato * 2);
});
