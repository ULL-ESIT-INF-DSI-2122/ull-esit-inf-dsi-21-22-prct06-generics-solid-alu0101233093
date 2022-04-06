interface Observable {
    subscribe(observer: Observer): boolean;
    unsubscribe(observer: Observer): boolean;
    notify(): void;
}

interface Observer {
    update(observable: Observable): string;
}

export class Subscriptor implements Observer{
    constructor(private nombre: string, private correo: string, private numero: number){}

    public get_nombre(): string{
        return this.nombre;
    }

    public get_correo(): string{
        return this.correo;
    }

    public get_numero(): number{
        return this.numero;
    }

    public update(observable: Observable): string {
        if (observable instanceof Revista) {
            let output: string = "---- Nuevo número de la revista " + observable.get_nombre() + " ----\n";
            return output + observable.get_contenido();
        } else
            return "";
    }
}

export class Revista implements Observable{
    constructor(private nombre: string, private contenido: string, private subs: Subscriptor[]){}

    public get_contenido(): string{
        return this.contenido;
    }

    public get_nombre(): string{
        return this.nombre;
    }

    public subscribe(sub: Subscriptor): boolean {
        if(!this.subs.find(s => s == sub)){
            this.subs.push(sub);
            return true;
        } else
            return false;
    }

    public unsubscribe(sub: Subscriptor): boolean {
        let x: number = this.subs.findIndex(s => s == sub);
        if(x != -1){
            this.subs.splice(x,1);
            return true;
        } else
            return false;
    }

    public notify(): void {
        this.subs.forEach((subs) => subs.update(this));
    }
}