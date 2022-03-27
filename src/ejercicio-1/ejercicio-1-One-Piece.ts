import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {One_Piece_fighter, One_Piece_universe, UOP}

/**
 * @class Clase hija de fighter adaptada a los personajes de One Piece
 */
class One_Piece_fighter extends fighter{
    readonly bando: string;
    readonly edad: number;

    /**
     * Constructor de la clase One Piece fighter
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
    constructor(n: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string, b: string, ed: number, f: string){
        super(n,al,p,vi,at,d,ve,es,f);
        this.bando = b;
        this.edad = ed;
    }
}

/**
 * @class Clase hija de universo adaptado al universo de One Piece
 */
class One_Piece_universe extends universe{
    /**
     * Constructor de la clase One_Piece_Universe
     * @param fighters Grupo de luchadores del universo de One Piece
     */
    constructor(protected fighters: One_Piece_fighter[]){ super(fighters,"One_Piece")}

    /**
     * Método para imprimir los datos de los luchadores de One Piece
     * @param p Luchador del que se desea mostrar los datos
     */
    public imprimir_datos(p: One_Piece_fighter): void {
        console.log("Datos de " + p.nombre + ":")
        console.log("Universo: One Piece");
        console.log("Bando: " + p.bando);
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

let Zoro: One_Piece_fighter = new One_Piece_fighter("Roronoa Zoro", 1.81, 80, 300, 300, 150, 200, "armas", "Tripulación de los sombrero de paja", 21, "Si muero aquí será porque no estaba destinado a llegar más lejos.");
let Aokiji: One_Piece_fighter = new One_Piece_fighter("Aokiji", 2.98, 130, 300, 350, 200, 100, "distancia", "Almirante retirado de la Marina", 49, "¿Acabas de ... apartar la mirada? No hay forma de que puedas ganar si haces eso.");

let UOP: One_Piece_universe = new One_Piece_universe([Aokiji, Zoro]);