import URL from 'URL';
function parsearUrl(URL){
    let objeto = new URL(URL);
    return objeto;
}
let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"); 


console.log(objeto.hostname); // "ejemplo.com"
console.log(objeto.pathname); // "/ruta"

