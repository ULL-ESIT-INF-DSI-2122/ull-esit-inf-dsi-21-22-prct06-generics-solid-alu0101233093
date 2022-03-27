import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {OP_fighter, OP_universe, UOP}

/**
 * @class Clase hija de fighter adaptada a los personajes de One Piece
 */
class OP_fighter extends fighter{
    readonly bando: string;
    readonly edad: number;
    readonly haki: boolean;

    /**
     * Constructor de la clase OP fighter
     * @param n nombre
     * @param al altura
     * @param p peso
     * @param vi vida
     * @param at ataque
     * @param d defensa
     * @param ve velocidad
     * @param es estilo de combate
     * @param b bando
     * @param ed edad
     * @param f frase representativa del personaje
     */
    constructor(n: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string, b: string, ed: number, h: boolean, f: string){
        super(n,al,p,vi,at,d,ve,es,f);
        this.bando = b;
        this.edad = ed;
        this.haki = h;
    }

    /**
     * Método para imprimir los datos de los luchadores de One Piece
     */
    public imprimir_datos(): void {
        console.log("Datos de " + this.nombre + ":")
        console.log("Universo: One Piece");
        console.log("Bando: " + this.bando);
        console.log("Edad: " + this.edad);
        console.log("Altura: " + this.altura);
        console.log("Peso: " + this.peso);
        console.log("HP: " + this.vida_actual());
        console.log("Ataque: " + this.ataque);
        console.log("Defensa: " + this.defensa);
        console.log("Velocidad: " + this.velocidad);
        console.log("Usuario de Haki: " + this.haki);
        console.log("Estilo de combate: " + this.estilo_combate);
    }
}

/**
 * @class Clase hija de universo adaptado al universo de One Piece
 */
class OP_universe extends universe{
    /**
     * Constructor de la clase OP_Universe
     * @param fighters Grupo de luchadores del universo de One Piece
     */
    constructor(protected fighters: OP_fighter[]){ super(fighters,"One_Piece")}
};

let Zoro: OP_fighter = new OP_fighter("Roronoa Zoro", 1.81, 80, 300, 300, 150, 200, "armas", "Tripulación de los sombrero de paja", 21, true, "Si muero aquí será porque no estaba destinado a llegar más lejos.");
let Aokiji: OP_fighter = new OP_fighter("Aokiji", 2.98, 130, 300, 350, 200, 100, "distancia", "Almirante retirado de la Marina", 49, true, "¿Acabas de ... apartar la mirada? No hay forma de que puedas ganar si haces eso.");

let UOP: OP_universe = new OP_universe([Aokiji, Zoro]);