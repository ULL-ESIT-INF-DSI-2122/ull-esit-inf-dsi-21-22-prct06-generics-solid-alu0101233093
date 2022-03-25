import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {DC_fighter, DC_universe}

class DC_fighter extends fighter{
    public nombre_super: string;
    public equipo: string;
    public edad: number;

    constructor(n: string, ns: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string, eq: string, ed: number){
        super(n,al,p,vi,at,d,ve,es);
        this.nombre_super = ns;
        this.equipo = eq;
        this.edad = ed;
    }
}

class DC_universe extends universe{
    constructor(protected fighters: DC_fighter[]){ super(fighters,"DC")}

    imprimir_datos(p: DC_fighter): void {
        console.log("Datos de " + p.nombre + ":")
        console.log("Universo: DC");
        console.log("Equipo: " + p.equipo);
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
