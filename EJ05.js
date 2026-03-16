import { URL } from 'url';

function parsearUrl(dir){
    try {
        const urlObj = new URL(dir);
        return {
            host: urlObj.origin,
            pathname: urlObj.pathname,
            parametros: Object.fromEntries(urlObj.searchParams.entries())
        };
    } catch (err) {
        console.error('Excepción en parsearUrl:', err);
        return {
            host: '',
            pathname: '',
            parametros: {}
        };
    }
}

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto);

