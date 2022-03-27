import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {DC_fighter, DC_universe, UCDC}

class DC_fighter extends fighter{
    readonly nombre_real: string;
    readonly equipo: string;
    readonly edad: number;

    constructor(n: string, nr: string, al: number, p: number, ed: number, vi: number, at: number, d: number, ve: number, es: string, eq: string){
        super(n,al,p,vi,at,d,ve,es);
        this.nombre_real = nr;
        this.equipo = eq;
        this.edad = ed;
    }
}

class DC_universe extends universe{
    constructor(protected fighters: DC_fighter[]){ super(fighters,"DC")}

    public imprimir_datos(p: DC_fighter): void {
        console.log("Datos de " + p.nombre + ":");
        console.log("Universo: DC");
        console.log("Nombre real: " + p.nombre_real);
        console.log("Equipo: " + p.equipo);
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

let Super_man: DC_fighter = new DC_fighter("SuperMan", "Clark Kent / Kal-El", 1.91, 102, 38, 150, 250, 400, 250, "cuerpo a cuerpo", "La Liga de la Justicia");
let Green_Lantern: DC_fighter = new DC_fighter("Green Lantern", "Hal jordan", 1.82, 91, 35, 150, 170, 170, 200, "distancia", "La liga de la Justicia")

let UCDC: DC_universe = new DC_universe([Super_man, Green_Lantern]);