/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Pasajero 1'
}


const pasajero2: Pasajero = {
    nombre: 'Pasajero 2',
    hijos: ['juan', 'pedro', 'luis']
}

function imprimeHijos(pasajero: Pasajero): void {

    const cuantosHijos=pasajero.hijos?.length || 0
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);