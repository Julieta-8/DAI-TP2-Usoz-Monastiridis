// librería https://jquery.com/
import { $ } from "jquery";
let moneda = obtenerMoneda("AR");

console.log(moneda);
function obtenerMoneda(moneda){
    const urlObj = new $(moneda);
    return {
        host: urlObj.origin,
        pathname: urlObj.pathname,
        parametros: Object.fromEntries(urlObj.searchParams.entries())
    };
}

