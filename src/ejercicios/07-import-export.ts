/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desestructuracion-funciones";


const carritoCompras: Producto[] = [

    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 200
    }

];

const [total,isv]=calculaISV(carritoCompras);

console.log('Total: ',total);
console.log('Isv:',isv);