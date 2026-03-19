import {currency} from 'currency';


let moneda = obtenerMoneda("AR");
console.log(moneda);


function obtenerMoneda(moneda){
    return currency(moneda);
   
}

