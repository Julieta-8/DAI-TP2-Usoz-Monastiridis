import fs from 'fs';
const entrada = 'Entrada.txt';
fs.writeFileSync(entrada, "Hola");
const salida = 'Salida.txt';
function CambiarNombre(entrada, salida){

const contenido = fs.readFileSync(entrada, 'utf-8')
fs.writeFileSync(salida , contenido);
}
