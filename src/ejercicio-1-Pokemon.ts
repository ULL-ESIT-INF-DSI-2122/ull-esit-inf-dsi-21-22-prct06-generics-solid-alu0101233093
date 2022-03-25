import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {Pokemon_fighter, Pokemon_universe}

class Pokemon_fighter extends fighter{
    public tipo: string;
    public id: number;

    constructor(n: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string, ti: string, id: number){
        super(n,al,p,vi,at,d,ve,es);
        this.tipo = ti;
        this.id = id;
    }
}

class Pokemon_universe extends universe{
    constructor(protected fighters: Pokemon_fighter[]){ super(fighters,"Pokemon")}

    imprimir_datos(p: Pokemon_fighter): void {
        console.log("Datos de " + p.nombre + ":")
        console.log("Universo: Pokemon");
        console.log("Tipo: " + p.tipo);
        console.log("ID: " + p.id);
        console.log("Altura: " + p.altura);
        console.log("Peso: " + p.peso);
        console.log("HP: " + p.vida);
        console.log("Ataque: " + p.ataque);
        console.log("Defensa: " + p.defensa);
        console.log("Estilo de combate: " + p.estilo_combate);
        console.log("Velocidad: " + p.velocidad);
    }
};