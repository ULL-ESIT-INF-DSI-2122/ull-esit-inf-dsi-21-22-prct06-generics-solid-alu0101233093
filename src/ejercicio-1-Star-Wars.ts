import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {Star_Wars_fighter, Star_Wars_universe}

class Star_Wars_fighter extends fighter{
    readonly lado: string;
    readonly edad: number;

    constructor(n: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string, eq: string, ed: number){
        super(n,al,p,vi,at,d,ve,es);
        this.lado = eq;
        this.edad = ed;
    }
}

class Star_Wars_universe extends universe{
    constructor(protected fighters: Star_Wars_fighter[]){ super(fighters,"Star_Wars")}

    public imprimir_datos(p: Star_Wars_fighter): void {
        console.log("Datos de " + p.nombre + ":")
        console.log("Universo: Star Wars");
        console.log("Lado de la fuerza: " + p.lado);
        console.log("Edad: " + p.edad);
        console.log("Altura: " + p.altura);
        console.log("Peso: " + p.peso);
        console.log("HP: " + p.vida);
        console.log("Ataque: " + p.ataque);
        console.log("Defensa: " + p.defensa);
        console.log("Estilo de combate: " + p.estilo_combate);
        console.log("Velocidad: " + p.velocidad);
    }
};
