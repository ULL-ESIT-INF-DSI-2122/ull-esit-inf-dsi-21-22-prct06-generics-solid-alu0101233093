import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {SW_fighter, SW_universe, UCSW}

class SW_fighter extends fighter{
    readonly lado: string;
    readonly edad: number;

    constructor(n: string, al: number, p: number, ed: number, vi: number, at: number, d: number, ve: number, es: string, l: string){
        super(n,al,p,vi,at,d,ve,es);
        this.lado = l;
        this.edad = ed;
    }
}

class SW_universe extends universe{
    constructor(protected fighters: SW_fighter[]){ super(fighters,"SW")}

    public imprimir_datos(p: SW_fighter): void {
        console.log("Datos de " + p.nombre + ":")
        console.log("Universo: Star Wars");
        console.log("Lado de la fuerza: " + p.lado);
        console.log("Edad: " + p.edad);
        console.log("Altura: " + p.altura);
        console.log("Peso: " + p.peso);
        console.log("HP: " + p.vida);
        console.log("Ataque: " + p.ataque);
        console.log("Defensa: " + p.defensa);
        console.log("Velocidad: " + p.velocidad);
        console.log("Estilo de combate: " + p.estilo_combate);
    }
};

let Joda: SW_fighter = new SW_fighter("Joda", 0.66, 13, 900, 180, 150, 100, 160, "armas", "Luminoso");
let Darth_Vader: SW_fighter = new SW_fighter("Darth Vader", 2.03, 136, 45, 150, 180, 170, 100, "armas", "Oscuro")

let UCSW: SW_universe = new SW_universe([Joda, Darth_Vader]);