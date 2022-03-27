import { expect } from 'chai';
import { Series, Peliculas, Documentales, Dark, Jumanji, Cosmos, Emociones, Regreso_al_futuro } from '../src/ejercicio-2';

describe('Tests ejercicio 2 - DSIFlix', () => {

    it('Las clases hijas de BasicStreameableCollection filtran correctamente por título', () => {
        expect(Series.sort_título("Dark")).to.be.eql([Dark]);
        expect(Peliculas.sort_título("Jumanji: En la selva")).to.be.eql([Jumanji]);
        expect(Documentales.sort_título("Cosmos: Mundos posibles")).to.be.eql([Cosmos]);
    })

    it('Las clases hijas de BasicStreameableCollection filtran correctamente por año', () => {
        expect(Series.sort_año(2017)).to.be.eql([Dark]);
        expect(Peliculas.sort_año(2017)).to.be.eql([Jumanji]);
        expect(Documentales.sort_año(2017)).to.be.eql([]);
    })

    it('Las clases hijas de BasicStreameableCollection filtran correctamente por género', () => {
        expect(Series.sort_género("Suspenso")).to.be.eql([Dark]);
        expect(Peliculas.sort_género("Comedia")).to.be.eql([Jumanji]);
        expect(Documentales.sort_género("Animales")).to.be.eql([Emociones]);
    })

    it('Las clases hijas de BasicStreameableCollection filtran correctamente por casting', () => {
        expect(Series.sort_casting("Lisa Vicari")).to.be.eql([Dark]);
        expect(Peliculas.sort_casting("Kirsten Dunst")).to.be.eql([Jumanji]);
        expect(Documentales.sort_casting("Patrick Stewart")).to.be.eql([Cosmos]);
    })

    it('Las clases hijas de BasicStreameableCollection filtran correctamente por director', () => {
        expect(Series.sort_director("Baran bo Odar")).to.be.eql([Dark]);
        expect(Peliculas.sort_director("Robert Zemeckis")).to.be.eql([Regreso_al_futuro]);
        expect(Documentales.sort_director("Karl Walter Lindenlaub")).to.be.eql([Cosmos]);
    })

    it('La clase SeriesCollection filtra correctamente por número de temporadas', () => {
        expect(Series.sort_temporadas(5)).to.be.eql([Dark]);
    })

    it('La clase PeliculasCollection filtra correctamente por duración', () => {
        expect(Peliculas.sort_duración(118)).to.be.eql([Regreso_al_futuro]);
    })
})