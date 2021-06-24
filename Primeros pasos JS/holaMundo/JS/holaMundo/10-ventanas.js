/************************
 ********Alertas*********
 ************************/

alert("Esta es una alerta");

/************************
 ********Confirmación****
 ************************/
var resultado=confirm("¿Quieres continuar?");
console.log(resultado);

/************************
 ****Ingreso de datos****
 ************************/

 var dato=prompt ("¿En que año naciste?","YYYY");
 console.log(dato+"|",typeof dato+"<----Esto es un string");
datonum=Number(dato);
console.log(datonum+"|",typeof datonum+"<----Esto es un número");
