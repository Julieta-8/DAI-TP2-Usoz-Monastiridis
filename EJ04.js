import fs from 'fs';

export function CambiarNombre(entrada, salida){

const contenido = fs.readFileSync(entrada, 'utf-8')
fs.writeFileSync(salida , contenido);
}
