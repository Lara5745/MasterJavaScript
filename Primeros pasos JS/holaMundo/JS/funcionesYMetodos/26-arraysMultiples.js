alert("Arrays multiples");

var genero =  ["Acción","Terror","Comedia"];
var pelicula =  ["Fast & Furios","Friday 13th","Yes sir!"];

var cine = [genero,pelicula];

console.log(pelicula);
console.log(cine);
console.log(cine[0][1],cine[1][1]);

//AGREGAR ITEMS AL ARRAY
console.log(pelicula);
var nuevo="";

do {
    nuevo=prompt("Ingresa una nueva película");
    pelicula.push(nuevo);
} while (nuevo!="FIN");

pelicula.pop(); //ELIMINA el último item del array
console.log(pelicula);

//CONVERTIR ARRAYS A STRING
var string=pelicula.join();
document.write(string+"<----Un arreglo convertido en un String<br>");

//ELIMINAR ITEMS AL ARRAY

//Eliminar uno específico
var del = pelicula.indexOf("Friday 13th");
console.log(del);
    if (del > -1) {
        pelicula.splice(del,1,"Pocoyo"); //Parametros: (índice del array,cantidad de índices que seran borrados,sustitucion o adición de un nuevo elemento(en caso de que no exista este parametro simplemente sera eliminado el índice) )
        //             (______ _______)    
        //                    |
        //                    v
        //(índice,#deEliminaciones,Si existe este parametro se agrega al arreglo) 
    }
document.write(pelicula+"<----Borrado con splice, solo Friday, y se sustituye con Pocoyo<br>");

// var pelicula =  ["Fast & Furios","Friday 13th","Yes sir!"];

//Eliminar uno específico y todos los subsecuentes
var del = pelicula.indexOf("Pocoyo");
    if (del > -1) {
        pelicula.splice(del);
    }
    document.write(pelicula+"<----Borrado con splice(desde Pocoyo en adelante)");

/*********************************
 *****STRINGS A ARRAYS******
 *********************************/

var texto = "in1, in2, in3, in4";
var stringArray=texto.split(", ");
console.log(stringArray);

/*******************
 *****ORDENAR******
 ********************/

 genero.sort(); //orden alfabético
 console.log(genero);

 genero.reverse(); //orden invertido
 console.log(genero);