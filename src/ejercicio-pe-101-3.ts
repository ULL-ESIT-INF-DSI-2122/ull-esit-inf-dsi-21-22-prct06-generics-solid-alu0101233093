/**
 * @interface Observable Obliga a una clase a ser tener métodos para ser observable
 */
interface Observable {
    subscribe(observer: Observer): boolean;
    unsubscribe(observer: Observer): boolean;
    notify(): void;
}

/**
 * @interface Observer Obliga a una clase a tener métodos para observar
 */
interface Observer {
    update(observable: Observable): string;
}

/**
 * @class Subscriptor
 * @implements Observer
 * @description Subscriptor de una revista
 */
export class Subscriptor implements Observer{
    /**
     * Constructor de la clase Subscriptor
     * @param nombre Nombre del subscriptor
     * @param correo Correo del subscriptor
     * @param numero Numero del subscriptor
     */
    constructor(private nombre: string, private correo: string, private numero: number){}

    /**
     * Getter del nombre del subscriptor
     * @returns nombre del subscriptor
     */
    public get_nombre(): string{
        return this.nombre;
    }

    /**
     * Getter del correo del subscriptor
     * @returns correo del subscriptor
     */
    public get_correo(): string{
        return this.correo;
    }

    /**
     * Getter del número del subscriptor
     * @returns número del subscriptor
     */
    public get_numero(): number{
        return this.numero;
    }

    /**
     * Método que notifica al subscriptor de un nuevo número de revista
     * @param observable Revista a la que está subscripta
     * @returns 
     */
    public update(observable: Observable): string {
        if (observable instanceof Revista) {
            let output: string = "---- Nuevo número de la revista " + observable.get_nombre() + " ----\n";
            return output + observable.get_contenido();
        } else
            return "";
    }
}

/**
 * @class Revista
 * @implements Observable
 * @description Clase que almacena una revista y sus subscriptores
 */
export class Revista implements Observable{
    /**
     * Constructor de la clase Revista
     * @param nombre Nombre de la revista
     * @param contenido Contenido de la revista
     * @param subs Personas subscritas a la revista
     */
    constructor(private nombre: string, private contenido: string, private subs: Subscriptor[]){}

    /**
     * Getter del contenido de la revista
     * @returns contenido de la revista
     */
    public get_contenido(): string{
        return this.contenido;
    }

    /**
     * Getter del nombre de la revista
     * @returns nombre de la revista
     */
    public get_nombre(): string{
        return this.nombre;
    }

    /**
     * Permite añadir un nuevo subscriptor
     * @param sub subscriptor nuevo
     * @returns true si se registró y false si no se pudo registrar
     */
    public subscribe(sub: Subscriptor): boolean {
        if(!this.subs.find(s => s == sub)){
            this.subs.push(sub);
            return true;
        } else
            return false;
    }

    /**
     * Permite eliminar un subscriptor
     * @param sub subscriptor que se desea eliminar
     * @returns true si se eliminó y false si no se pudo eliminar
     */
    public unsubscribe(sub: Subscriptor): boolean {
        let x: number = this.subs.findIndex(s => s == sub);
        if(x != -1){
            this.subs.splice(x,1);
            return true;
        } else
            return false;
    }

    /**
     * @description Permite notificar a todos los subscriptores
     */
    public notify(): void {
        this.subs.forEach((subs) => subs.update(this));
    }
}