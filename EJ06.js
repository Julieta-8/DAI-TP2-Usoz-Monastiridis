import { URL } from 'url';

export function parsearUrl2(dir){
    const urlObj = new URL(dir);
    return {
        host: urlObj.origin,
        pathname: urlObj.pathname,
        parametros: Object.fromEntries(urlObj.searchParams.entries())
    };
}

