import './EJ01.js';
import './EJ02.js';
import './EJ03.js';
import { cambiarNombre } from './EJ04.js';
import { parsearUrl } from './EJ05.js';
import { parsearUrl2 } from './EJ06.js';
import { obtenerMoneda } from './EJ07.js';

cambiarNombre('./entrada.txt', './salida.txt');

console.log(
    parsearUrl(
        "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"
    )
);

console.log(
    obtenerMoneda("AR")
);
console.log(
    parsearUrl2(
        "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"
    )
);
