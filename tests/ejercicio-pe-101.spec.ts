import 'mocha';
import { expect } from 'chai';
import { NumericSearchableCollection } from '../src/ejercicio-pe-101';
import { StringSearchableCollection } from '../src/ejercicio-pe-101';

describe('Tests ejercicio PE 101\n\n', () => {

    let nsc: NumericSearchableCollection = new NumericSearchableCollection([2,4,5,6]);
	it('El método getItem de la clase NumericSearchableCollection funciona correctamente', () => {
        expect(nsc.getItem(1)).to.be.equal(4);
	});

    it('El método removeItem de la clase NumericSearchableCollection funciona correctamente', () => {
        nsc.removeItem(3)
        expect(nsc.getItem(2)).to.be.equal(5);
        expect(nsc.getNumberOfItems()).to.be.equal(3);
	});

    it('El método addItem de la clase NumericSearchableCollection funciona correctamente', () => {
        nsc.addItem(4)
        expect(nsc.getItem(3)).to.be.equal(4);
        expect(nsc.getNumberOfItems()).to.be.equal(4);
	});

    it('El método getNumberOfItems de la clase NumericSearchableCollection funciona correctamente', () => {
        expect(nsc.getNumberOfItems()).to.be.equal(4);
	});

    it('El método search de la clase NumericSearchableCollection funciona correctamente', () => {
        expect(nsc.search(4)).to.be.eql([4,4]);
	});

    let ssc: StringSearchableCollection = new StringSearchableCollection(["hola","mundo","palabra"]);
	it('El método getItem de la clase StringSearchableCollection funciona correctamente', () => {
        expect(ssc.getItem(1)).to.be.equal("mundo");
	});

    it('El método addItem de la clase StringSearchableCollection funciona correctamente', () => {
        ssc.addItem("mágica")
        expect(ssc.getItem(3)).to.be.equal("mágica");
        expect(ssc.getNumberOfItems()).to.be.equal(4);
	});

    it('El método removeItem de la clase StringSearchableCollection funciona correctamente', () => {
        ssc.removeItem(3)
        expect(ssc.getItem(2)).to.be.equal("palabra");
        expect(ssc.getNumberOfItems()).to.be.equal(3);
	});

    it('El método getNumberOfItems de la clase StringSearchableCollection funciona correctamente', () => {
        expect(ssc.getNumberOfItems()).to.be.equal(3);
	});

    it('El método search de la clase StringSearchableCollection funciona correctamente', () => {
        expect(ssc.search("la")).to.be.eql(["hola","palabra"]);
	});

});