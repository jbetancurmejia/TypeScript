/*
    ===== Código de TypeScript =====
*/

import { Console } from "console";

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp:()=>void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    console.log('antes',personaje);
    personaje.pv += curarX
    console.log('despues',personaje);
}

const nuevooPersonaje:PersonajeLOR={
    nombre:'Pacman',
    pv:50,
    mostrarHp(){
        console.log('Puntos de vida',this.pv)
    }
}

curar(nuevooPersonaje,100);

nuevooPersonaje.mostrarHp();

const resultadoSuma = sumar(10, 20);
const resultadoMultiplicacion = multiplicar(5, 0, 10);

console.log(resultadoSuma);
console.log(resultadoMultiplicacion);