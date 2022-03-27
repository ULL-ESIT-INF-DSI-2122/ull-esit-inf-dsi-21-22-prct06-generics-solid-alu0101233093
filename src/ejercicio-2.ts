class stream{
    video: string;
    duración: number;
    año: number;
    género: string;
    casting: string[];
    director: string;
    puntuación: number;

    constructor(v: string, du: number, a: number, g: string, c: string[], di: string, p: number){
        this.video = v;
        this.duración = du;
        this.año = a;
        this.género = g;
        this.casting = c;
        this.director = di;
        this.puntuación = p;
    }
}

export interface Streameable{
    sort_título(titulo: string): stream[];
    sort_año(año: number): stream[];
    sort_género(género: string): stream[];
    sort_actor(actor: string): stream[];
    sort_director(director: string): stream[];
    sort_puntuación(punt_mínima: number): stream[];
}

export abstract class BasicStreamableCollection implements Streameable {
    constructor(protected contenido: stream[]){}

    sort_título(titulo: string): stream[]{
        return this.contenido.filter(a => a.video == titulo);
    }

    sort_año(año: number): stream[]{
        return this.contenido.filter(a => a.año == año);
    }

    sort_género(género: string): stream[]{
        return this.contenido.filter(a => a.género == género);
    }

    sort_actor(actor: string): stream[]{
        return this.contenido.filter(a => a.casting.find( b => b == actor));
    }

    sort_director(director: string): stream[] {
        return this.contenido.filter(a => a.director == director);
    }

    sort_puntuación(punt_mínima: number): stream[]{
        return this.contenido.filter(a => a.puntuación >= punt_mínima);
    }
}

export class series extends BasicStreamableCollection{
    constructor(cont: stream[]){super(cont)}
}

let Regreso_al_futuro: stream = new stream("Regreso al futuro", 117, 1985, "Ciencia ficción", ["Michael J. Fox", "Christopher Lloyd", "Crispin Glover", "Lea Thompson", "Thomas F. Wilson"], "Robert Zemeckis", 7.5);
let Jumanji: stream = new stream("Jumanji: En la selva", 119, 2017, "Comedia", ["Robin Williams","Bonnie Hunt","Kirsten Dunst","Bradley Pierce","Bebe Neuwirth","Jonathan Hyde"], "Joe Johnston", 6.3);

