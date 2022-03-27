import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {Marvel_fighter, Marvel_universe, UCM, Spider_Man, Ant_Man}

/**
 * @class Clase hija de fighter adaptada a los personajes de Marvel
 */
class Marvel_fighter extends fighter{
    readonly nombre_real: string;
    readonly equipo: string;
    readonly edad: number;

    /**
     * Constructor de la clase Marvel fighter
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
        super(n,al,p,vi,at,d,ve,es, f);
        this.nombre_real = nr;
        this.equipo = eq;
        this.edad = ed;
    }

    /**
     * Método para imprimir los datos de los luchadores de Marvel
     */
     public imprimir_datos(): void {
        console.log("Datos de " + this.nombre + ":");
        console.log("Universo: Marvel");
        console.log("Nombre real: " + this.nombre_real);
        console.log("Equipo: " + this.equipo);
        console.log("Edad: " + this.edad);
        console.log("Altura: " + this.altura);
        console.log("Peso: " + this.peso);
        console.log("HP: " + this.vida_actual());
        console.log("Ataque: " + this.ataque);
        console.log("Defensa: " + this.defensa);
        console.log("Velocidad: " + this.velocidad);
        console.log("Estilo de combate: " + this.estilo_combate);
    }
}

/**
 * @class Clase hija de universo adaptado al universo de Marvel
 */
class Marvel_universe extends universe{
    /**
     * Constructor de la clase Marvel_Universe
     * @param fighters Grupo de luchadores del universo de Marvel
     */
    constructor(protected fighters: Marvel_fighter[]){ super(fighters,"Marvel")}
};

let Iron_Man: Marvel_fighter = new Marvel_fighter("IronMan", "Tony Stark", 1.98, 102, 53, 150, 200, 230, 150, "armas","Los Vengadores", "Si no podremos salvar la Tierra, te juro que la vengaremos");
let Spider_Man: Marvel_fighter = new Marvel_fighter("SpiderMan", "Peter Parker", 1.78, 76, 17, 170, 130, 100, 190, "cuerpo a cuerpo", "Los Vengadores", "Si puedes hacer algo bueno por los demás, tienes la obligación de hacerlo.");
let DrStrange: Marvel_fighter = new Marvel_fighter("Dr. Strange", "Stephen Strange", 1.89, 81, 45, 150, 300, 100, 150, "distancia", "Los Vengadores", "No alteramos las leyes naturales. Las defendemos.")
let Thanos: Marvel_fighter = new Marvel_fighter("Thanos", "Thanos", 2.62, 448, 1000, 500, 250, 350, 70, "cuerpo a cuerpo", "Villanos", "Hacer desaparecer a la mitad del universo, a eso lo llamo compasión");
let Ant_Man: Marvel_fighter = new Marvel_fighter("AntMan", "Scott Lang", 1.78,  78, 56, 150, 100, 130, 200, "sigilo", "Los Vengadores", "Las leyes de la naturaleza superan a las leyes del hombre. Y yo superé las leyes de la naturaleza.");

let UCM: Marvel_universe = new Marvel_universe([Iron_Man, Spider_Man, DrStrange, Thanos, Ant_Man]);