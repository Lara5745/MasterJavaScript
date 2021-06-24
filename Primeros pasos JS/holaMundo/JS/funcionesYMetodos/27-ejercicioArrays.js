alert("Ejercicio de Arrays");

/*
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valora´ra el uso de funciones) */

// VARIANTE #32 (Estas variantes se iran repitiendo a lo largo del ejercicio)
// var numeros = new Array(6);
// for (let index = 0; index < 6; index++) {
//     numeros[index]=parseInt(prompt("Introduce un número"));
// }

mostrar = (array,textCustom="") =>{
    document.write(`<h1>Contenido del array ${textCustom}</h1>`)
        array.forEach(numero => {
            document.write(`<ul><li><strong>${numero}</strong></li></ul>`);
        });
        document.write("<hr>");
        // *OJO* La siguiente variante no sirve en este caso pero es bueno recordar el for in
        // for (let numero in array) {
        //     document.write(`<ul><li><strong>${numero}</strong></li></ul>`);
        // }
        console.log(array);
}

//1. Petición de datos
var numeros = [];
for (let index = 0; index < 6; index++) {
    numeros.push(parseInt(prompt("Introduce un número")));
}

//2. Mostrar array
mostrar(numeros);

//3. Ordenar y mostrar
numeros.sort(function (a,b){return a-b}); //El .sort lo ordena alfaberticamente, el callback lo ordena numericamente. *OJO* si se quiere invertir el orden usar 'b-a'
mostrar(numeros,"ordenado");

//4. Invertir y mostrar
numeros.reverse();
mostrar(numeros, "invertido");

// 5. Mostrar # de elementos
document.write(`<h1>La cantidad de elementos es = ${numeros.length}</h1>`);

//6. Buscar un valor
var busqueda = parseInt( prompt("¿Qué número quieres buscar?","0"));
let posicion=numeros.findIndex(numero=>numero ==busqueda);

if (posicion > -1) {
    document.write(`<hr><h1>¡ENCONTRADO!</h1><h2>Se Encuentra en la posición #${posicion}</h2>`);
}else{
    document.write("<hr><h1>Lo sentimos, tu busqueda NO se encuentra en el array</h1>");
}
