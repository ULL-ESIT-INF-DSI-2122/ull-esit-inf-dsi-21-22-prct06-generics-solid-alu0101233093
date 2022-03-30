import 'mocha';
import { expect } from 'chai';
import { RandomNumberCollection } from '../src/ejercicio-pe-101-2';

describe('Tests ejercicio PE 101 2\n\n', () => {

    let rnc1: RandomNumberCollection = new RandomNumberCollection(10,0);
	it('El tamaño del set es el esperado', () => {
        expect(rnc1.get_collection().size).to.be.equal(10);
	});

    it('El tipo del conjunto es entero', () => {
        rnc1.get_collection().forEach( i => expect(typeof i).to.be.equal('number'));
	});

    let rnc2: RandomNumberCollection = new RandomNumberCollection(10,0)
    it('La clase genera números aleatorios entre 0 y 1', () => {
        rnc2.get_collection().forEach( i => expect(typeof i).to.be.equal('number'));
	});

    let rnc3: RandomNumberCollection = new RandomNumberCollection(10,1,10,15)
    it('La clase genera números aleatorios entre 10 y 15', () => {
        rnc3.get_collection().forEach( i => expect(typeof i).to.be.equal('number'));
	});
});