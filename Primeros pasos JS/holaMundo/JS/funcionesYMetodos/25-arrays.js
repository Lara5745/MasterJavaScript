alert("Arrays");

var nombre = "Eduardo";
console.log(nombre);

var nombres = ["pablo","yorman","angie","aldair",5,true];
console.log(nombres);
console.log(nombres[1]+" (posición #1)");

var numeros= new Array(5,4,8,"seis","tres");
console.log(numeros);
console.log(numeros[3]+" (posición #3)");

var repeat=false;
do{
    var res = parseInt(prompt("¿En qué posición esta el dato que quieres obtenter?",0));
    if (res > nombres.length || res < 0) {
        alert("lo siento, solo se aceptan valores del 0 al 6")
        repeat=true;
    } else {
        document.write("El nombre selecionado es: "+nombres[res]);
        repeat=false;
    }
} while(repeat==true); 

/*********************************
**********Recorrer Arrays********
*********************************/

//FORMA TRADICIONAL
var frutas= new Array("melon","sandia","uva","manzana","pera","ciruela");
 
document.write("<h1>Frutas con 'for'</h1><ul>");
    for (let index = 0; index < frutas.length; index++) {
        document.write(`
                <li>${frutas[index]}</li>
        `); 
    }
document.write("</ul>");

//FORMA JAVASCRIPT FOR EACH **MEJOR**
document.write("<h1>Frutas con 'forEach'</h1><ul>");

    frutas.forEach((cadaFruta,posicion) => { //primer parametro es el nombre que se le da a cada iteración y el segundo es para que muestre el número de la posición en que se encuentra
        document.write(`
            <li>${posicion} --> ${cadaFruta}</li>
        `); 
    });
document.write("</ul>");

//FORMA JAVASCRIPT FOR in **AÚN MEJOR**
document.write("<h1>Frutas con 'for in'</h1><ul>");

for (let cadaFruta in frutas) {
    document.write(`
        <li> ${frutas[cadaFruta]}</li>
    `); 
}
document.write("</ul>");

/*********************************
**********Búsqueda Arrays********
*********************************/

    // .find
//Flecha
var busquedaFle = frutas.find(frutas=>frutas=="Uva"); //Si retorna "undefined" es que no existe en el array. *OJO* es key sensitive, por eso retorna "undefined"

//Tradicional
var busqueda = frutas.find(function (frutas){
    return frutas == "uva";
});

console.log(busquedaFle,busqueda);
    
    //.findIndex
//Flecha
var busquedaFle = frutas.findIndex(frutas=>frutas=="Uva"); //Retornara -1, ya que no existe dentro del array

//Tradicional
var busqueda = frutas.findIndex(function (frutas){
    return frutas == "uva";
});

console.log(busquedaFle,busqueda); 

    //.some
var precios = new Array (28,-1,47,65,1,33,11);

var busquedaSome=precios.some(precio=>precio ==10 || precio < 1); //Retorna true, ya que no existe el "10" pero si un valor menor a 1
console.log(busquedaSome);