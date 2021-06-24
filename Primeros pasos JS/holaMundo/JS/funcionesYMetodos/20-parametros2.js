alert("Parametros REST & SPREAD");

function listadoFrutas(fruta1,fruta2,...resto_de_frutas) { //Esos ~...~ simboliza los parametros REST (el resto de resultados), no es común verlos pero sirven para aceptar más valores de los que se anticiparón, los cuales se almacenan en un array
  console.log("fruta 1: ",fruta1);
  console.log("fruta 2: ",fruta2);
  console.log(resto_de_frutas);
}
// **********Version con FUNCIONES FLECHA**********
// var listadoFrutas = (fruta1,fruta2,...resto_de_frutas) =>{  
//   console.log("fruta 1: ",fruta1),
//   console.log("fruta 2: ",fruta2),
//   console.log(resto_de_frutas);
// }


listadoFrutas("Naranja","Manzana","Sandia","Pera","Melón","Coco");

var otrasFrutas= ["Naranja","Manzana"];
listadoFrutas(...otrasFrutas,"Sandia","Pera","Melón","Coco"); //En esta situación los ~...~  simboliza SPREAD el cuál SEPARA cada uno de los parametros que componen el arreglo. De esta forma ~otrasFrutas~ ya no será almecada en fruta1, si no que, sus componentes serán almacenados en ~fruta1~ y ~fruta2~ respectivamente
                                                             //Gracias a lo explicado en el comentario de arriba, el resultado en consola será igual a ~listadoFrutas("Naranja","Manzana","Sandia","Pera","Melón","Coco");~ que es lo que esta en la línea #9
