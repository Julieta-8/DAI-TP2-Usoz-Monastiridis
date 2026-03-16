// librería https://jquery.com/
import { $ } from "jquery";
import {currency} from 'currency.js';
let moneda = obtenerMoneda("AR");

console.log(moneda);
function obtenerMoneda(moneda){
    const urlObj = new currency(moneda);
    return {
        host: urlObj.origin,
        pathname: urlObj.pathname,
        parametros: Object.fromEntries(urlObj.searchParams.entries())
    };
}

