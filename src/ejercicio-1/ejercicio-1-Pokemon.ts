import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {Pokemon_fighter, Pokemon_universe, UP}

/**
 * @class Clase hija de fighter adaptada a los personajes de Pokémon
 */
class Pokemon_fighter extends fighter{
    readonly tipo: string;
    readonly id: number;

    /**
     * Constructor de la clase Pokémon fighter
     * @param n nombre
     * @param al altura
     * @param p peso
     * @param vi vida
     * @param at ataque
     * @param d defensa
     * @param ve velocidad
     * @param es estilo de combate
     * @param ti tipo
     * @param id número identificativo
     * @param f frase representativa
     */
    constructor(n: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string, ti: string, id: number, f: string){
        super(n,al,p,vi,at,d,ve,es,f);
        this.tipo = ti;
        this.id = id;
    }
}

/**
 * @class Clase hija de universo adaptado al universo de Pokémon
 */
class Pokemon_universe extends universe{
    /**
     * Constructor de la clase Pokémon_Universe
     * @param fighters Grupo de luchadores del universo de Pokémon
     */
    constructor(protected fighters: Pokemon_fighter[]){ super(fighters,"Pokemon")}

    /**
     * Método para imprimir los datos de los luchadores de Pokémon
     * @param p Luchador del que se desea mostrar los datos
     */
    public imprimir_datos(p: Pokemon_fighter): void {
        console.log("Datos de " + p.nombre + ":")
        console.log("Universo: Pokemon");
        console.log("Tipo: " + p.tipo);
        console.log("ID: " + p.id);
        console.log("Altura: " + p.altura);
        console.log("Peso: " + p.peso);
        console.log("HP: " + p.vida_actual());
        console.log("Ataque: " + p.ataque);
        console.log("Defensa: " + p.defensa);
        console.log("Velocidad: " + p.velocidad);
        console.log("Estilo de combate: " + p.estilo_combate);
    }
};

let Kecleon: Pokemon_fighter = new Pokemon_fighter("Kecleon", 1, 22, 60, 90, 70, 40, "sigilo", "Normal", 352, "¡Kecleon, Kecleon!");
let Pikachu: Pokemon_fighter = new Pokemon_fighter("Pikachu", 0.4, 6, 35, 55, 40, 90, "distancia", "Eléctrico", 25, "¡Pika Pi!");

let UP: Pokemon_universe = new Pokemon_universe([Pikachu, Kecleon]);