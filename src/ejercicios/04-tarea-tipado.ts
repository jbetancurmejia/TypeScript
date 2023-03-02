/*
    ===== Código de TypeScript =====
*/


interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string
}

interface SuperHeroe2 {
    nombre: string;
    edad: number;
    direccion: {
        calle: string,
        pais: string,
        ciudad: string,
        mostrarDireccion: () => string
    };
}


interface Direccion {
    calle: string,
    pais: string,
    ciudad: string,   
}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY',        
    },
    mostrarDireccion() {
        return this.nombre, this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const superHeroe2: SuperHeroe2 = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY',
        mostrarDireccion() {
            return superHeroe2.nombre + ', ' + this.ciudad + ', ' + this.pais;
        }
    }
}


console.log(superHeroe.mostrarDireccion())

console.log(superHeroe2.direccion.mostrarDireccion())

