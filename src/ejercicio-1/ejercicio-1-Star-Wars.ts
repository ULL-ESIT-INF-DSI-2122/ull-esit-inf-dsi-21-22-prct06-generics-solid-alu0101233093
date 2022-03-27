import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {SW_fighter, SW_universe, UCSW}

/**
 * @class Clase hija de fighter adaptada a los personajes de Star Wars
 */
class SW_fighter extends fighter{
    readonly lado: string;
    readonly edad: number;

    /**
     * Constructor de la clase SW_Fighter
     * @param n nombre
     * @param al altura
     * @param p peso
     * @param ed edad
     * @param vi vida
     * @param at ataque
     * @param d defensa
     * @param ve velocidad
     * @param es estilo de combate
     * @param l lado de la fuerza al que pertenece
     * @param f frase representativa del personaje
     */
    constructor(n: string, al: number, p: number, ed: number, vi: number, at: number, d: number, ve: number, es: string, l: string, f: string){
        super(n,al,p,vi,at,d,ve,es,f);
        this.lado = l;
        this.edad = ed;
    }
}

/**
 * @class Clase hija de universo adaptado al universo de Star wars
 */
class SW_universe extends universe{
    /**
     * Constructor de la clase SW_Universe
     * @param fighters Grupo de luchadores del universo de Star Wars
     */
    constructor(protected fighters: SW_fighter[]){ super(fighters,"SW")}

    /**
     * Método para imprimir los datos de los luchadores de Star Wars
     * @param p Luchador del que se desea mostrar los datos
     */
    public imprimir_datos(p: SW_fighter): void {
        console.log("Datos de " + p.nombre + ":")
        console.log("Universo: Star Wars");
        console.log("Lado de la fuerza: " + p.lado);
        console.log("Edad: " + p.edad);
        console.log("Altura: " + p.altura);
        console.log("Peso: " + p.peso);
        console.log("HP: " + p.vida_actual());
        console.log("Ataque: " + p.ataque);
        console.log("Defensa: " + p.defensa);
        console.log("Velocidad: " + p.velocidad);
        console.log("Estilo de combate: " + p.estilo_combate);
    }
};

let Yoda: SW_fighter = new SW_fighter("Yoda", 0.66, 13, 900, 180, 150, 100, 160, "armas", "Luminoso", "Imposible nada es. Difícil, muchas son");
let Darth_Vader: SW_fighter = new SW_fighter("Darth Vader", 2.03, 136, 45, 150, 180, 170, 100, "armas", "Oscuro", "Ten cuidado de no ahogarte con tus propias convicciones");

let UCSW: SW_universe = new SW_universe([Yoda, Darth_Vader]);