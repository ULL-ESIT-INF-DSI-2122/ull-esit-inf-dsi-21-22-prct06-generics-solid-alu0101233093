/**
 * @class Clase que almacena y gestiona los datos de un combatiente
 */
export abstract class fighter{
    readonly nombre: string;
    readonly altura: number;
    readonly peso: number;
    private vida: number;
    readonly vida_max: number;
    readonly ataque: number;
    readonly defensa: number;
    readonly velocidad: number;
    readonly estilo_combate: string;
    readonly frase: string;

    /**
     * Constructor de la clase fighter
     * @param n Nombre
     * @param al Altura
     * @param p Peso
     * @param vi Vida
     * @param at Ataque
     * @param d Defensa
     * @param ve Velocidad
     * @param es Estilo de combate
     * @param f Frase representativa del personaje
     */
    constructor(n: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string, f: string){
        this.nombre = n;
        this.altura = al;
        this.peso = p;
        this.vida = vi;
        this.vida_max = vi;
        this.ataque = at;
        this.defensa = d;
        this.velocidad = ve;
        this.estilo_combate = es;
        this.frase = f;
    }

    /**
     * @method curar Permite aumentar la vida actual a la vida máxima
     */
    public curar(): void{
        this.vida = this.vida_max;
    }

    /**
     * Permite reducir la vida del luchador
     * @param daño daño realizado, en caso de no pasar ningún parámetro, la vida se pondrá a 0
     */
    public herir(daño?: number){
        if(typeof daño === "undefined")
            this.vida = 0;
        else
            this.vida -= daño;
    }

    /**
     * Método getter para obtener la vida actual del luchador
     * @returns Vida actual del luchador
     */
    public vida_actual(): number{
        return this.vida;
    }

    /**
     * Imprime los datos del luchador
     * @param p Luchador del que se desea imprimir los datos
     */
     abstract imprimir_datos(): void;
};

/**
 * @class Gestiona un universo de luchadores
 */
export abstract class universe{
    /**
     * Constructor de la clase universe
     * @param fighters Grupo de luchadores en el universo
     * @param universe_name Nombre del universo
     */
    constructor(protected fighters: fighter[], readonly universe_name: string){}

    /**
     * Permite registrar un nuevo luchador en el universo
     * @param p Luchador que se desea registrar en el universo
     */
    public registrar(p: fighter): void {
        this.fighters.push(p);
    }

    /**
     * Busca un luchador en el universo según el nombre
     * @param nombre String con el nombre del luchador
     * @returns Undefined en caso de no encontrar al luchador y en caso de que si, devolvería al luchador
     */
    public buscar(nombre?: string): fighter | undefined {
        let p: fighter | undefined = this.fighters.find((a) => a.nombre == nombre)
            if (typeof p === "undefined")
                return undefined;
            else
                return p;
    }

    /**
     * Función que calcula la efectividad de los ataques según el estilo de combate.
     * @param f1 Luchador 1
     * @param f2 Luchador 2
     * @param mute True si no se desea mostrar por pantalla, false en caso contrario
     * @returns El daño que realizaría el luchador 1 al luchador 2
     */
    public efectividad(f1: fighter, f2:fighter, mute:boolean): number{
        let efectividad: number = 1;
        let daño: number = 0;

        if(f1.estilo_combate == f2.estilo_combate)
            efectividad = 1;
        else{
            switch(f1.estilo_combate){
                case "armas":
                    switch(f2.estilo_combate){
                        case "cuerpo a cuerpo": efectividad = 2; break;
                        case "distancia": efectividad = 1; break;
                        case "sigilo": efectividad = 1; break;
                    }
                    break;
                case "cuerpo a cuerpo":
                    switch(f2.estilo_combate){
                        case "armas": efectividad = 0.5; break;
                        case "distancia": efectividad = 0.5; break;
                        case "sigilo": efectividad = 2; break;
                    }
                    break;
                case "distancia":
                    switch(f2.estilo_combate){
                        case "armas": efectividad = 1; break;
                        case "cuerpo a cuerpo": efectividad = 2; break;
                        case "sigilo": efectividad = 0.5; break;
                    }
                    break;
                case "sigilo":
                    switch(f2.estilo_combate){
                        case "armas": efectividad = 1; break;
                        case "cuerpo a cuerpo": efectividad = 0.5; break;
                        case "distancia": efectividad = 2; break;
                    }
                    break;
            }
        }

        daño = Number((50 * (f1.ataque / f2.defensa) * efectividad).toFixed(0));
        if (!mute) {
            console.log("Daño realizado: " + daño);

            switch (efectividad) {
                case 0.5: console.log("Ataque poco efectivo..."); break;
                case 2: console.log("¡Ataque super efectivo!"); break;
            }
        }

        return daño;
    }
}