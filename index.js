const Array = ["juli", "brisa"]

console.log(Array[1])
// --------------MODULOS---------------------
//reutilizar coidgo y organización, reducción de errores, mejoramiento de rendimiento
//Modulos internos : import
//modulos externo : instalados atravez de npm
//modulos custom : creación local

import cowsay from 'cowsay';

const mensaje = cowsay.say({
    text: 'Hola, spy una vaca que habla!',
    e:'oO',
    t: 'u'
});
console.log(mensaje);



import nuts from './ModuloC.js';
const mensaje1 = nuts('Brisa');
console.log(mensaje1);