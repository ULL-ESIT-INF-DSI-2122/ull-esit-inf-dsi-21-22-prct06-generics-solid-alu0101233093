/**
 * @class Clase para generar números aleatorios
 */
export class Random{

    private static random: Random;

    private constructor(){}

    /**
     * 
     */
    public static getRandom(): Random {
        if (!Random.random) {
          Random.random = new Random();
        }
        return Random.random;
    }

    /**
     * @method getRandom Método para generar un número en punto flotante entre [0,1]
     */
    public randomFloat(): number{
        return Math.random();
    }

    /**
     * @method random Método para generar un número aleatorio en un rango
     * @param n inicio del rango
     * @param m final del rango
     */
    public random(n: number, m:number): number{
        return Math.random() * (m - n) + n;
    }

    /**
     * @method random Método para generar un número entero aleatorio en un rango
     * @param n inicio del rango
     * @param m final del rango
     */
    public randomInt(n: number, m:number): number{
        return Math.round(Math.random() * (m - n) + n);
    }
}

/**
 * @class Clase que gestiona una colleción de números aleatorios
 */
export class RandomNumberCollection implements Iterable<number>{
    private collection_: Set<number>;
    private tam_: number;

    /**
     * Constructor de la clase RandomNumberCollection
     * @param tam tamaño inicial de la colección
     */
    constructor(tam:number, modo: number, n: number = 0, m: number = tam){
        this.collection_ = new Set<number>([]);
        for(let i = 0; i < tam ; i++){
            const randomInstance: Random = Random.getRandom()
            switch(modo){
                case 0: this.collection_.add(randomInstance.randomFloat()); break;
                case 1: this.collection_.add(randomInstance.random(n,m)); break;
                case 2: this.collection_.add(randomInstance.randomInt(n,m)); break;
            }
        }
        this.tam_ = tam;
    }

    public get_collection(): Set<number>{
        return this.collection_;
    }

    /**
     * Método necesario para la plantilla Iterable
     */
    [Symbol.iterator](): Iterator<number> {
        return this.collection_.values();
    }

    /**
     * Método para determinar si la siguiente posición es válida
     */
    public next(): { done: boolean, value: number } {
        return {
            done: false,
            value: this.tam_++
        }
    }
}