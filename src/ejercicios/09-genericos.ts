/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento:T){
    return argumento;    
}

let soyString = queTipoSoy('Hola mundo');
let soyNumerico = queTipoSoy(10);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
let soyExplicito= queTipoSoy<number>(100)