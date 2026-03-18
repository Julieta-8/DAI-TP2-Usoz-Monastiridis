import fs from 'fs';
CambiarNombre('./entrada.txt', './salida.txt');
function CambiarNombre(entrada, salida){

const contenido = fs.readFileSync(entrada, 'utf-8')
fs.writeFileSync(salida , contenido);
}
