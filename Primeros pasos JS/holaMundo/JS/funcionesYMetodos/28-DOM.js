alert("DOM");

/*********************************
**********Elementos por ID********
*********************************/

var caja=document.getElementById("miCaja").innerHTML; //obtiene unicamente lo que contiene la etiqueta. Por eso se llama INNER. Muestra "Hola, soy una caja!" ya que esto esta en el .html, el mismo que se modificará en  #14
// console.log(caja.textContent); //Obtiene el texto dentro del elemento
console.log(caja);

//CREACIÓN DE UN "OBJETO"
//***JS***
var caja=document.getElementById("miCaja"); //obtiene todo el elemento tal cual esta en el .html

//***JQuery***
var caja=document.querySelector("#miCaja");

console.log(caja);

caja.innerHTML="Texto CAMBIADO desde JS!"; //Modifica el contenido de la etiqueta
caja.style.background="red";
caja.style.color = "white";
caja.style.padding="10px";
caja.className = "hola hola2"; //Cambia el class, en caso de que ya exista uno, lo sustituye

cambiaColor = color =>{caja.style.background=color} //Llamar desde consola para modificar el color

/*********************************
******Elementos por etiqueta*****
*********************************/

var todosLosDivs=document.getElementsByTagName("div"); //Toma todos los div del docum.
console.log(todosLosDivs); //Muestra todos los div del docum. en un arreglo
var segundo=todosLosDivs[2]; //Selecciono solo el indice dos
segundo.innerHTML="Nuevo Texto para el SEGUNDO";
segundo.style.background="blue";

/*********************************
**********Elementos por su clase********
*********************************/