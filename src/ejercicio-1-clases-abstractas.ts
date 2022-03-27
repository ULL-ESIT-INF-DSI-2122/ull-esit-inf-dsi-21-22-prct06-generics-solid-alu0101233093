export abstract class fighter{
    readonly nombre: string;
    readonly altura: number;
    readonly peso: number;
    public vida: number;
    readonly vida_max: number;
    readonly ataque: number;
    readonly defensa: number;
    readonly velocidad: number;
    readonly estilo_combate: string;

    constructor(n: string, al: number, p: number, vi: number, at: number, d: number, ve: number, es: string){
        this.nombre = n;
        this.altura = al;
        this.peso = p;
        this.vida = vi;
        this.vida_max = vi;
        this.ataque = at;
        this.defensa = d;
        this.velocidad = ve;
        this.estilo_combate = es;
    }

    public curar(): void{
        this.vida = this.vida_max;
    }
};


export abstract class universe{
    constructor(protected fighters: fighter[], readonly universe_name: string){}

    public registrar(p: fighter): void {
        this.fighters.push(p);
    }

    abstract imprimir_datos(p: fighter): void;

    public buscar(nombre?: string): fighter | undefined {
        let p: fighter | undefined = this.fighters.find((a) => a.nombre == nombre)
            if (typeof p === "undefined")
                return undefined;
            else
                return p;
    }

    public efectivity(f1: fighter, f2:fighter, mute:boolean): number{
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