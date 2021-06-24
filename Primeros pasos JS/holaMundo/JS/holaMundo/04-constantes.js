//Las constantes son similares a las variables pero su valor no puede cambiar
alert("Constantes");

var web = "https://www.google.com.mx/";
const ip = "192.168.10.1"; //constante
console.log(web,ip);

web= "https://aaaaaaaaa";
ip="192.168.10.2"; //Esta linea generará un error ya que IP es una constante
console.log(web,ip);
