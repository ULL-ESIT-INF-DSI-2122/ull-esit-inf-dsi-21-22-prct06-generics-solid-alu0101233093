import 'mocha';
import { expect } from 'chai';
import { combat } from '../src/ejercicio-1-clase-combat';
import { Marvel_fighter, Marvel_universe, UCM, Spider_Man, Ant_Man } from "../src/ejercicio-1-Marvel"
import { UCDC } from "../src/ejercicio-1-DC"
import { fighter, universe } from '../src/ejercicio-1-clases-abstractas';
import { Pokemon_universe } from '../src/ejercicio-1-Pokemon';
import { UCSW } from '../src/ejercicio-1-Star-Wars';

describe('Tests ejercicio 1 - Clase abstracta fighter', () => {
    it('La clase fighter permite reducir la vida a los combatientes', () => {
        Spider_Man.vida -= 50;
        expect(Spider_Man.vida).to.be.lessThan(Spider_Man.vida_max);
    })

    it('La clase fighter permite curar a los combatientes', () => {
        Spider_Man.curar();
        expect(Spider_Man.vida).to.be.equal(Spider_Man.vida_max);
    })
})

describe('Tests ejercicio 1 - Clase abstracta universe', () => {
    let universo: universe = new Marvel_universe([]);

    it('La clase universo registra correctamente a los luchadores', () => {
        universo.registrar(Spider_Man)
        expect(universo.buscar("SpiderMan")).to.be.eql(Spider_Man);
        universo.registrar(Ant_Man)
        expect(universo.buscar("AntMan")).to.be.eql(Ant_Man);
    })

    it('La clase universo permite buscar a un combatiente del universo', () => {
        expect(universo.buscar("SpiderMan")).to.be.eql(Spider_Man);
        expect(universo.buscar("Iron_Man")).to.be.equal(undefined);
    })

})

describe('Tests ejercicio 1 - Clase combat', () => {
    let combate: combat = new combat(UCM,UCM);
    
    it('Permite el combate en un mismo universo', () => {
        expect(combate.start(true,"SpiderMan","AntMan")).to.be.eql(Spider_Man);
        UCM.buscar("SpiderMan")?.curar();
        UCM.buscar("AntMan")?.curar();
    })

    it('Permite el combate entre distintos universos y lo imprime correctamente', () => {
        combate = new combat(UCM, UCDC);
        expect(combate.start(false,"Dr. Strange","SuperMan")).to.be.eql(UCDC.buscar("SuperMan"));
        UCM.buscar("Dr. Strange")?.curar();
        UCDC.buscar("SuperMan")?.curar();
    })

    it('No permite el combate con combatientes inexistentes', () => {
        expect(combate.start(false,"Dr. Strange","Aquaman")).to.be.equal(undefined);
        expect(combate.start(false,"Viuda negra","SuperMan")).to.be.equal(undefined);
    })
})

describe('Tests ejercicio 1 - Universo Cinematográfico de Marvel\n\n', () => {

    let combate: combat = new combat(UCM, UCM);

    it('SpiderMan vs IronMan => IronMan', () => {
        expect(combate.start(true,"IronMan","SpiderMan")).to.be.eql(UCM.buscar("IronMan"));
        UCM.buscar("SpiderMan")?.curar();
        UCM.buscar("IronMan")?.curar();
	});

    it('Dr. Strange vs Thanos => Dr. Strange', () => {
        expect(combate.start(false,"Dr. Strange","Thanos")).to.be.eql(UCM.buscar("Dr. Strange"));
        UCM.buscar("Dr. Strange")?.curar();
        UCM.buscar("Thanos")?.curar();
	});

});

describe('Tests ejercicio 1 - Universo Cinematográfico de DC\n\n', () => {

    let combate: combat = new combat(UCDC, UCDC);

    it('Superman vs GreenLanter => SuperMan', () => {
        expect(combate.start(false,"SuperMan","Green Lantern")).to.be.eql(UCDC.buscar("Green Lantern"));
        UCM.buscar("Green Lantern")?.curar();
        UCM.buscar("SuperMan")?.curar();
	});

});

describe('Tests ejercicio 1 - Universo Cinematográfico de Star Wars\n\n', () => {

    let combate: combat = new combat(UCSW, UCSW);

    it('Joda vs Darth Vader => Darth Vader', () => {
        expect(combate.start(false,"Joda","Darth Vader")).to.be.eql(UCSW.buscar("Darth Vader"));
        UCSW.buscar("Darth Vader")?.curar();
        UCSW.buscar("Joda")?.curar();
	});

});
