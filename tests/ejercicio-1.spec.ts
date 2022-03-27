import 'mocha';
import { expect } from 'chai';
import { combat } from '../src/ejercicio-1/ejercicio-1-clase-combat';
import { universe } from '../src/ejercicio-1/ejercicio-1-clases-abstractas';
import { Marvel_universe, UCM, Spider_Man, Ant_Man } from "../src/ejercicio-1/ejercicio-1-Marvel"
import { UCSW } from '../src/ejercicio-1/ejercicio-1-Star-Wars';
import { UCDC } from '../src/ejercicio-1/ejercicio-1-DC';
import { UOP } from '../src/ejercicio-1/ejercicio-1-One-Piece';
import { UP } from '../src/ejercicio-1/ejercicio-1-Pokemon';

describe('Tests ejercicio 1 - Clase abstracta fighter', () => {
    it('La clase fighter permite reducir la vida a los combatientes', () => {
        Spider_Man.herir(50);
        expect(Spider_Man.vida_actual()).to.be.lessThan(Spider_Man.vida_max);
    })

    it('La clase fighter permite curar a los combatientes', () => {
        Spider_Man.curar();
        expect(Spider_Man.vida_actual()).to.be.equal(Spider_Man.vida_max);
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
        expect(combate.start("SpiderMan","AntMan")).to.be.eql(Spider_Man);
        UCM.buscar("SpiderMan")?.curar();
        UCM.buscar("AntMan")?.curar();
    })

    it('Permite el combate entre distintos universos', () => {
        combate = new combat(UCM, UCDC);
        expect(combate.start("Dr. Strange","SuperMan")).to.be.eql(UCDC.buscar("SuperMan"));
        UCM.buscar("Dr. Strange")?.curar();
        UCDC.buscar("SuperMan")?.curar();

        combate = new combat(UCM, UOP);
        expect(combate.start("AntMan","Roronoa Zoro",true)).to.be.eql(UOP.buscar("Roronoa Zoro"));
        UCM.buscar("AntMan")?.curar();
        UOP.buscar("Roronoa Zoro")?.curar();
    })

    it('No permite el combate con combatientes inexistentes', () => {
        expect(combate.start("Dr. Strange","Aquaman")).to.be.equal(undefined);
        expect(combate.start("Viuda negra","SuperMan")).to.be.equal(undefined);
    })
})

describe('Tests ejercicio 1 - Universo Cinematográfico de Marvel\n\n', () => {

    let combate: combat = new combat(UCM, UCM);

    it('SpiderMan vs IronMan => IronMan', () => {
        expect(combate.start("IronMan","SpiderMan",true)).to.be.eql(UCM.buscar("IronMan"));
        UCM.buscar("SpiderMan")?.curar();
        UCM.buscar("IronMan")?.curar();
	});

    it('Dr. Strange vs Thanos => Dr. Strange', () => {
        expect(combate.start("Dr. Strange","Thanos")).to.be.eql(UCM.buscar("Dr. Strange"));
        UCM.buscar("Dr. Strange")?.curar();
        UCM.buscar("Thanos")?.curar();
	});

});

describe('Tests ejercicio 1 - Universo Cinematográfico de DC\n\n', () => {

    let combate: combat = new combat(UCDC, UCDC);

    it('Superman vs GreenLanter => SuperMan', () => {
        expect(combate.start("SuperMan","Green Lantern")).to.be.eql(UCDC.buscar("Green Lantern"));
        UCM.buscar("Green Lantern")?.curar();
        UCM.buscar("SuperMan")?.curar();
	});

});

describe('Tests ejercicio 1 - Universo Cinematográfico de Star Wars\n\n', () => {

    let combate: combat = new combat(UCSW, UCSW);

    it('Yoda vs Darth Vader => Darth Vader', () => {
        expect(combate.start("Yoda","Darth Vader")).to.be.eql(UCSW.buscar("Darth Vader"));
        UCSW.buscar("Darth Vader")?.curar();
        UCSW.buscar("Yoda")?.curar();
	});

});

describe('Tests ejercicio 1 - Universo de Pokémon\n\n', () => {

    let combate: combat = new combat(UP, UP);

    it('Pikachu vs Kecleon => Kecleon', () => {
        expect(combate.start("Pikachu","Kecleon")).to.be.eql(UP.buscar("Kecleon"));
        UP.buscar("Kecleon")?.curar();
        UP.buscar("Pikachu")?.curar();
	});

});

describe('Tests ejercicio 1 - Universo de One Piece\n\n', () => {

    let combate: combat = new combat(UOP, UOP);

    it('Zoro vs Aokiji => Zoro', () => {
        expect(combate.start("Roronoa Zoro","Aokiji")).to.be.eql(UOP.buscar("Roronoa Zoro"));
        UOP.buscar("Roronoa Zoro")?.curar();
        UOP.buscar("Aokiji")?.curar();
	});

});
