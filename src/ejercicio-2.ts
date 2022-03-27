/**
 * @interface Stream Tiene los atributos básicos de una clase de streaming
 */
export interface Stream{
    título: string;
    año: number;
    género: string;
    casting: string[];
    director: string;
}

/**
 * @class clase abstracta Basic Stream, cumple con la interfaz Stream
 */
export abstract class BasicStream implements Stream{
    constructor(readonly título: string, readonly año: number,readonly género: string, readonly casting: string[], readonly director: string){}
} 

/**
 * @class Clase serie, hija de Basic Stream
 */
export class serie extends BasicStream{
    constructor(readonly título: string, readonly año: number,readonly género: string, readonly casting: string[], readonly director: string, readonly capítulos: number[]){
        super(título, año, género, casting, director);
    }
}

/**
 * @class Clase película, hija de Basic Stream
 */
export class película extends BasicStream{
    constructor(readonly título: string, readonly año: number,readonly género: string, readonly casting: string[], readonly director: string, readonly duración: number){
        super(título, año, género, casting, director);
    }
}

/**
 * @class Clase documental, hija de Basic Stream
 */
export class documental extends BasicStream{
    constructor(readonly título: string, readonly año: number,readonly género: string, readonly casting: string[], readonly director: string){
        super(título, año, género, casting, director);
    }
}

/**
 * @interface Streameable Tiene los métodos básicos para una clase streameable
 */
export interface Streameable{
    sort_título(titulo: string): BasicStream[];
    sort_año(año: number): BasicStream[];
    sort_género(género: string): BasicStream[];
    sort_casting(casting: string): BasicStream[];
    sort_director(director: string): BasicStream[];
}

/**
 * @class Clase abstracta que gestiona un conjunto de objetos de streaming
 */
export abstract class BasicStreameableCollection implements Streameable {
    constructor(protected contenido: BasicStream[]){}
    
    sort_título(titulo: string): BasicStream[]{
        return this.contenido.filter(a => a.título == titulo);
    }

    sort_año(año: number): BasicStream[]{
        return this.contenido.filter(a => a.año == año);
    }

    sort_género(género: string): BasicStream[]{
        return this.contenido.filter(a => a.género == género);
    }

    sort_casting(cast: string): BasicStream[]{
        return this.contenido.filter(s => s.casting.includes(cast));
    }

    sort_director(director: string): BasicStream[] {
        return this.contenido.filter(a => a.director == director);
    }
}

/**
 * @class Clase SeriesCollection, hija de BasicStreameableCollection
 */
export class SeriesCollection extends BasicStreameableCollection{
    constructor(readonly contenido: serie[]){super(contenido)}
    
    sort_temporadas(maxtemp: number): BasicStream[] {
        return this.contenido.filter(a => a.capítulos.length <= maxtemp);
    }
}

/**
 * @class Clase PeliculasCollection, hija de BasicStreameableCollection
 */
export class PelículasCollection extends BasicStreameableCollection{
    constructor(readonly contenido: película[]){super(contenido)}

    sort_duración(max: number): película[] {
        return this.contenido.filter(a => a.duración <= max);
    }
}

/**
 * @class Clase DocumentalCollection, hija de BasicStreameableCollection
 */
export class DocumentalCollection extends BasicStreameableCollection{
    constructor(readonly contenido: documental[]){super(contenido)}
}

export let Regreso_al_futuro: película = new película("Regreso al futuro", 1985, "Ciencia ficción", ["Michael J. Fox", "Christopher Lloyd", "Crispin Glover", "Lea Thompson", "Thomas F. Wilson"], "Robert Zemeckis", 117);
export let Jumanji: película = new película("Jumanji: En la selva", 2017, "Comedia", ["Robin Williams","Bonnie Hunt","Kirsten Dunst","Bradley Pierce","Bebe Neuwirth","Jonathan Hyde"], "Joe Johnston", 119);
export let Peliculas: PelículasCollection = new PelículasCollection([Regreso_al_futuro, Jumanji]);

export let Juego_de_Tronos: serie = new serie("Juego de Tronos", 2011, "Fantasía Medieval", ["Emilia Clarke", "Kit Harrington", "Sophie Turner", "Peter Dinklage", "Nikolaj Coster-Waldau"], "Alan Taylor", [10,10,10,10,10,10,7,6]);
export let Dark: serie = new serie("Dark", 2017, "Suspenso", ["Louis Hofmann", "Andreas Pietschmann", "Lisa Vicari", "Barbara Nüsse", "Moritz Jahn", "Mark Waschke"], "Baran bo Odar", [10,8,8]);
export let Series: SeriesCollection = new SeriesCollection([Juego_de_Tronos, Dark]);

export let Cosmos: documental = new documental("Cosmos: Mundos posibles", 2020, "Acción", ["Neil deGrasse Tyson", "Patrick Stewart", "Sasha Sagan"], "Karl Walter Lindenlaub");
export let Emociones: documental = new documental("Emociones de la Tierra", 2021, "Animales", ["Norman Reedus", "Melissa McBride"], "Neil Davidge");
export let Documentales: DocumentalCollection = new DocumentalCollection([Cosmos, Emociones]);