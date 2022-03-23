/**
 * @interface Collectable Interfaz que comprueba que existan los siguientes métodos en una clase
 */
export interface collectable<T> {
    addItem(item: T): void;
    getItem(index: number): T;
    removeItem(index: number): void;
    getNumberOfItems(): number;
}

/**
 * @interface Searchable Interfaz que comprueba que existan los siguientes métodos en una clase
 */
export interface Searchable<T> {
    search(term: T): any;
}

/**
 * @class SearchableCollection Collección de elementos de tipo T
 */
export abstract class SearchableCollection<T> implements collectable<T>, Searchable<T>{
    /**
     * Constructor de la clase SearchableCollection
     * @param collection colleción de elementos de tipo T
     */
    constructor(protected collection: T[]){
    }

    /**
     * Agrega un item a la collección
     * @param item Item que se quiere collecionar
     */
    addItem(item: T): void{
        this.collection.push(item);
    }

    /**
     * Retorna el item en una posición concreta de la colleción
     * @param index índice donde se encuentra el item
     */
    getItem(index: number): T{
        return this.collection[index];
    }

    /**
     * Borra un item en una posición concreta de la colleción
     * @param index índice donde se desea borrar el item
     */
    removeItem(index: number): void{
        this.collection = this.collection.slice(0,index).concat(this.collection.slice(index + 1))
    }

    /**
     * @returns Número de items que tiene la colleción
     */
    getNumberOfItems(): number{
        return this.collection.length;
    }

    /**
     * Método abstracto que busca uno o varios items en una colleción
     * @param term término a tener en cuenta en la búsqueda
     */
    abstract search(term: T): any;
}

/**
 * @class SearchableCollection Collección de elementos de tipo numérico
 */
export  class NumericSearchableCollection extends SearchableCollection<number>{
    /**
     * Constructor de la clase NumericSearchableCollection
     * @param collection colleción de tipo numérico
     */
    constructor(protected collection: number[]){
        super(collection);
    }

    /**
     * Busca los números que sean iguales al término
     * @param term término con el que se compara
     * @returns Array con los items que coinciden con el término
     */
    search(term: number): number[]{
        return this.collection.filter(element => term == element);
    }
}

/**
 * @class SearchableCollection Collección de elementos de tipo String
 */
export  class StringSearchableCollection extends SearchableCollection<string>{
    /**
     * Constructor de la clase StringSearchableCollection
     * @param collection 
     */
    constructor(protected collection: string[]){
        super(collection);
    }

    /**
     * Busca las cadenas que contengan la subcadena pasada por parámetro
     * @param term subcadena que se buscará en cada palabra
     */
    search(term: string): string[]{
        return this.collection.filter(element => element.includes(term));
    }
}