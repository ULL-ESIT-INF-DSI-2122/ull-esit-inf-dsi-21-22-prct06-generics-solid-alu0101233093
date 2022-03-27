import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {One_Piece_fighter, One_Piece_universe}

class One_Piece_fighter extends fighter{
    readonly bando: string;
    readonly edad: number;

    constructor(n: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string, b: string, ed: number){
        super(n,al,p,vi,at,d,ve,es);
        this.bando = b;
        this.edad = ed;
    }
}

class One_Piece_universe extends universe{
    constructor(protected fighters: One_Piece_fighter[]){ super(fighters,"One_Piece")}

    public imprimir_datos(p: One_Piece_fighter): void {
        console.log("Datos de " + p.nombre + ":")
        console.log("Universo: One Piece");
        console.log("Bando: " + p.bando);
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