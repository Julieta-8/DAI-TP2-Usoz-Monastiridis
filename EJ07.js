import currency from 'country-to-currency';


let moneda = obtenerMoneda("AR");
console.log(moneda);


function obtenerMoneda(moneda){
    return currency(moneda);
   
}

