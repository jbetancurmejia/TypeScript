/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 330,
    segundo: 10,
    cancion: "",
    detalles: {
        autor: 'Camilo',
        anio: 2023
    }
}


const {volumen :vol,segundo,cancion,detalles } = reproductor;
const {autor,anio } = detalles;

console.log('Cancion actual',cancion );
console.log('Volumen cancion actual',vol);
console.log('Segundo cancion actual',segundo);
console.log('Autor cancion actual',autor);