import 'mocha';
import { expect } from 'chai';
import { Random, RandomNumberCollection } from '../src/ejercicio-pe-101-2';

describe('Tests ejercicio PE 101 2\n\n', () => {

    let rnc: RandomNumberCollection = new RandomNumberCollection(10);
	it('El tamaño del set es el esperado', () => {
        expect(rnc.get_collection().size).to.be.equal(10);
	});
        
});