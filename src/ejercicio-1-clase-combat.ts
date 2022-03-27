import { Marvel_fighter, Marvel_universe, UCM } from "./ejercicio-1-Marvel";
import { DC_fighter, DC_universe } from "./ejercicio-1-DC"
import { Pokemon_fighter, Pokemon_universe } from "./ejercicio-1-Pokemon"
import { One_Piece_fighter, One_Piece_universe } from "./ejercicio-1-One-Piece"
import { fighter, universe } from "./ejercicio-1-clases-abstractas";

export class combat{
    constructor(private universe1: universe, private universe2: universe){}

    public start(mute: boolean = false, f1string: string, f2string: string): fighter | undefined{
        let f1: fighter | undefined = this.universe1.buscar(f1string);
        let f2: fighter | undefined = this.universe2.buscar(f2string);
        
        if(typeof f1 === "undefined"){
            console.log("El combatiente 1 no existe en el universo %s\n",this.universe1.universe_name);
            return undefined;
        } if(typeof f2 === "undefined"){
            console.log("El combatiente 2 no existe en el universo %s\n",this.universe2.universe_name);
            return undefined;
        }

        let turno1: number = f1.velocidad;
        let turno2: number = f2.velocidad;
        let turno: boolean = turno1 > turno2; // true = turno del fighter 1 // false = turno del fighter 2
        let ronda: number = 1;
        let daño: number = 0;

        if (!mute) {
            console.log("¡EL COMBATE ENTRE " + f1.nombre.toUpperCase() + " Y " + f2.nombre.toUpperCase() + " HA COMENZADO!")
            console.log("\n");
            this.universe1.imprimir_datos(f1);
            console.log("\n");
            this.universe2.imprimir_datos(f2);
            console.log("\n");
        }

        while (f1.vida > 0 && f2.vida > 0) {
            if (!mute)
                console.log("\nRonda número: " + ronda);
            if (turno1 > turno2) {
                if (turno && ronda != 1 && !mute)
                    console.log("¡" + f1.nombre + " es muy rápido, ha conseguido un turno adicional!")
                turno = true;
                turno2 += f2.velocidad;

                if (!mute)
                    console.log(f1.nombre + " ha atacado a " + f2.nombre)

                daño = this.universe1.efectivity(f1,f2,mute);
                if (daño <= f2.vida)
                    f2.vida -= daño;
                else
                    f2.vida = 0;

                if (!mute) {
                    console.log(f1.nombre + " HP: " + f1.vida);
                    console.log(f2.nombre + " HP: " + f2.vida);
                }
            } else {
                if (!turno && ronda != 1 && !mute)
                    console.log("¡" + f2.nombre + " es muy rápido, ha conseguido un turno adicional!")
                turno = false;
                turno1 += f1.velocidad;

                if (!mute)
                    console.log(f2.nombre + " ha atacado a " + f1.nombre)
                daño = this.universe2.efectivity(f2,f1,mute);
                if (daño <= f1.vida)
                    f1.vida -= daño;
                else
                    f1.vida = 0;

                if (!mute) {
                    console.log(f1.nombre + " HP: " + f1.vida);
                    console.log(f2.nombre + " HP: " + f2.vida);
                }
            }
            ronda++;
        }

        if (f1.vida > f2.vida) {
            if (!mute) {
                console.log("\n¡El combate ha terminado!");
                console.log("¡El ganador es " + f1.nombre + "!");
            } return f1;
        } else {
            if (!mute) {
                console.log("\n¡El combate ha terminado!");
                console.log("¡El ganador es " + f2.nombre + "!");
            } return f2;
        }
    }

};