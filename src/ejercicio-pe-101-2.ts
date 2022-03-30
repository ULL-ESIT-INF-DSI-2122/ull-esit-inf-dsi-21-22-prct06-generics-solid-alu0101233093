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
    private counter_: number;
    private modo_: number;

    /**
     * Constructor de la clase RandomNumberCollection
     * @param tam tamaño inicial de la colección
     */
    constructor(tam:number, modo: number, n: number = 0, m: number = 10){
        this.collection_ = new Set<number>();
        this.modo_ = modo;
        switch(modo){
            case 0: for(let i = 0; i < tam ; i++){
                        const randomInstance: Random = Random.getRandom()
                        this.collection_.add(randomInstance.randomFloat())
                    }
            case 1: for(let i = 0; i < tam ; i++){
                        const randomInstance: Random = Random.getRandom()
                        this.collection_.add(randomInstance.random(n,m))
                    }
            case 2: for(let i = 0; i < tam ; i++){
                        const randomInstance: Random = Random.getRandom()
                        this.collection_.add(randomInstance.randomInt(n,m))
                    }
        }
        this.counter_ = tam;
    }

    public get_collection(): Set<number>{
        return this.collection_;
    }

    /**
     * Método necesario para la plantilla Iterable
     */
    [Symbol.iterator](): Iterator<number> {
        return new RandomNumberCollection(this.counter_,modo);
    }

    /**
     * Método para determinar si la siguiente posición es válida
     */
    public next(): { done: boolean, value: number } {
        return {
            done: false,
            value: this.counter_++
        }
    }
}