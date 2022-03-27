import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {DC_fighter, DC_universe, UCDC}

/**
 * @class Clase hija de fighter adaptada a los personajes de DC
 */
class DC_fighter extends fighter{
    readonly nombre_real: string;
    readonly equipo: string;
    readonly edad: number;

    /**
     * Constructor de la clase DC fighter
     * @param n nombre
     * @param nr nombre real
     * @param al altura
     * @param p peso
     * @param ed edad
     * @param vi vida
     * @param at ataque
     * @param d defensa
     * @param ve velocidad
     * @param es estilo de combate
     * @param eq equipo
     * @param f frase representativa
     */
    constructor(n: string, nr: string, al: number, p: number, ed: number, vi: number, at: number, d: number, ve: number, es: string, eq: string, f: string){
        super(n,al,p,vi,at,d,ve,es,f);
        this.nombre_real = nr;
        this.equipo = eq;
        this.edad = ed;
    }
}

/**
 * @class Clase hija de universo adaptado al universo de DC
 */
class DC_universe extends universe{
    /**
     * Constructor de la clase DC_Universe
     * @param fighters Grupo de luchadores del universo de DC
     */
    constructor(protected fighters: DC_fighter[]){ super(fighters,"DC")}

    /**
     * Método para imprimir los datos de los luchadores de DC
     * @param p Luchador del que se desea mostrar los datos
     */
    public imprimir_datos(p: DC_fighter): void {
        console.log("Datos de " + p.nombre + ":");
        console.log("Universo: DC");
        console.log("Nombre real: " + p.nombre_real);
        console.log("Equipo: " + p.equipo);
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

let Super_man: DC_fighter = new DC_fighter("SuperMan", "Clark Kent / Kal-El", 1.91, 102, 38, 150, 250, 400, 250, "cuerpo a cuerpo", "La Liga de la Justicia", "Las grandes cosas de hoy, surgen de las cenizas del ayer");
let Green_Lantern: DC_fighter = new DC_fighter("Green Lantern", "Hal jordan", 1.82, 91, 35, 150, 170, 170, 200, "distancia", "La liga de la Justicia", "El Miedo es el enemigo de la Voluntad.")

let UCDC: DC_universe = new DC_universe([Super_man, Green_Lantern]);