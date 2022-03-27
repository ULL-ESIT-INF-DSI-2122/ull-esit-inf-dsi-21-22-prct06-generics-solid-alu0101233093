import { fighter, universe } from "./ejercicio-1-clases-abstractas";

/**
 * @class Clase que almacena a los universos y sus combatientes para enfrentarlos
 */
export class combat{
    /**
     * Constructor de la clase combat
     * @param universe1 Universo del primer combatiente
     * @param universe2 Universo del segundo combatiente
     */
    constructor(private universe1: universe, private universe2: universe){}

    /**
     * Método que permite el enfrentamiento entre dos combatientes
     * @param f1string Primer combatiente
     * @param f2string Segundo combatiente
     * @param mute Define si se quiere mostrar el combate por consola, por defecto SI se muestra
     * @returns Combatiente ganador o indefinido en caso de que no se encuentre el combatiente en su respectivo universo
     */
    public start(f1string: string, f2string: string, mute: boolean = false): fighter | undefined{
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
            console.log(f1.nombre + ": \"" + f1.frase + "\"");
            console.log(f2.nombre + ": \"" + f2.frase + "\"");
            console.log("¡EL COMBATE ENTRE " + f1.nombre.toUpperCase() + " Y " + f2.nombre.toUpperCase() + " HA COMENZADO!")
            console.log("\n");
            f1.imprimir_datos();
            console.log("\n");
            f2.imprimir_datos();
            console.log("\n");
        }

        while (f1.vida_actual() > 0 && f2.vida_actual() > 0) {
            if (!mute)
                console.log("\nRonda número: " + ronda);
            if (turno1 > turno2) {
                if (turno && ronda != 1 && !mute)
                    console.log("¡" + f1.nombre + " es muy rápido, ha conseguido un turno adicional!")
                turno = true;
                turno2 += f2.velocidad;

                if (!mute)
                    console.log(f1.nombre + " ha atacado a " + f2.nombre)

                daño = this.universe1.efectividad(f1,f2,mute);
                if (daño <= f2.vida_actual())
                    f2.herir(daño);
                else
                    f2.herir();

                if (!mute) {
                    console.log(f1.nombre + " HP: " + f1.vida_actual());
                    console.log(f2.nombre + " HP: " + f2.vida_actual());
                }
            } else {
                if (!turno && ronda != 1 && !mute)
                    console.log("¡" + f2.nombre + " es muy rápido, ha conseguido un turno adicional!")
                turno = false;
                turno1 += f1.velocidad;

                if (!mute)
                    console.log(f2.nombre + " ha atacado a " + f1.nombre)
                daño = this.universe2.efectividad(f2,f1,mute);
                if (daño <= f1.vida_actual())
                    f1.herir(daño);
                else
                    f1.herir();

                if (!mute) {
                    console.log(f1.nombre + " HP: " + f1.vida_actual());
                    console.log(f2.nombre + " HP: " + f2.vida_actual());
                }
            }
            ronda++;
        }

        if (f1.vida_actual() > f2.vida_actual()) {
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