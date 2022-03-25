import { fighter } from './ejercicio-1-clases-abstractas';
import { universe } from './ejercicio-1-clases-abstractas';

export {Marvel_fighter, Marvel_universe, UCM}

class Marvel_fighter extends fighter{
    public nombre_real: string;
    public equipo: string;
    public edad: number;

    constructor(n: string, nr: string, al: number, p: number, ed: number, vi: number, at: number, d: number, ve: number, es: string, eq: string){
        super(n,al,p,vi,at,d,ve,es);
        this.nombre_real = nr;
        this.equipo = eq;
        this.edad = ed;
    }
}

class Marvel_universe extends universe{
    constructor(protected fighters: Marvel_fighter[]){ super(fighters,"Marvel")}

    imprimir_datos(p: Marvel_fighter): void {
        console.log("Datos de " + p.nombre + ":");
        console.log("Universo: Marvel");
        console.log("Nombre real: " + p.nombre_real);
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

let Iron_Man: Marvel_fighter = new Marvel_fighter("IronMan", "Tony Stark", 1.98, 102, 53, 150, 200, 230, 150, "armas","Los Vengadores");
let Spider_Man: Marvel_fighter = new Marvel_fighter("SpiderMan", "Peter Parker", 1.78, 76, 17, 170, 130, 100, 190, "cuerpo a cuerpo", "Los Vengadores");
let DrStrange: Marvel_fighter = new Marvel_fighter("Dr.Strange", "Stephen Strange", 1.89, 81, 45, 150, 300, 100, 150, "distancia", "Los Vengadores")
let Thanos: Marvel_fighter = new Marvel_fighter("Thanos", "Thanos", 2.62, 448, 1000, 500, 250, 350, 70, "cuerpo a cuerpo", "Villanos");

let UCM: Marvel_universe = new Marvel_universe([Iron_Man, Spider_Man, DrStrange, Thanos]);