import { URL } from 'url';

export function parsearUrl(dir){
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


