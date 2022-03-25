import { Marvel_fighter, Marvel_universe, UCM } from "./ejercicio-1-Marvel";
import { DC_fighter, DC_universe } from "./ejercicio-1-DC"
import { Pokemon_fighter, Pokemon_universe } from "./ejercicio-1-Pokemon"
import { One_Piece_fighter, One_Piece_universe } from "./ejercicio-1-One-Piece"
import { fighter, universe } from "./ejercicio-1-clases-abstractas";

export class combat{
    constructor(private universe1: universe, private universe2: universe){}

    public start(mute: boolean): fighter{
        let scanf = require('scanf');
        let f1: fighter | undefined;
        let f2: fighter | undefined;
        
        while(typeof f1 === "undefined" || typeof f2 === "undefined"){
            console.log("Introduce el nombre del combatiente 1 del universo de %s", this.universe1.universe_name);
            let s1:string = "Dr.Strange"//scanf('%s');
            f1 = this.universe1.buscar(s1);
            console.log("Introduce el nombre del combatiente 2 del universo de %s", this.universe2.universe_name);
            let s2:string = "Thanos"//scanf('%s');
            f2 = this.universe1.buscar(s2);

            if(typeof f1 === "undefined" && typeof f2 === "undefined")
                console.log("Ninguno de los dos combatientes introducidos existen en sus respectivos universos\n");
            else if(typeof f1 === "undefined")
                console.log("El combatiente 1 no existe en el universo %s\n",this.universe1.universe_name);
            else if(typeof f2 === "undefined")
                console.log("El combatiente 2 no existe en el universo %s\n",this.universe2.universe_name);
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

let combate: combat = new combat(UCM, UCM);
combate.start(false);