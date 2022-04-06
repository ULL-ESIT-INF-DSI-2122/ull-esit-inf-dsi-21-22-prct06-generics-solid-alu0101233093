import { expect } from 'chai';
import { Revista, Subscriptor } from '../src/ejercicio-pe-101-3';

describe('Tests ejercicio PE 101 06/04/2022 - Clase Subscriptor', () => {
    
    let Leonardo: Subscriptor = new Subscriptor("Leonardo","alu0101233093@ull.edu.es",327327327);
    it('La clase Subscriptor devuelve el nombre correctamente', () => {
        expect(Leonardo.get_nombre()).to.be.equal("Leonardo");
    })

    it('La clase Subscriptor devuelve el correo correctamente', () => {
        expect(Leonardo.get_correo()).to.be.equal("alu0101233093@ull.edu.es");
    })

    it('La clase Subscriptor devuelve el numero telefónico correctamente', () => {
        expect(Leonardo.get_numero()).to.be.equal(327327327);
    })

    it('La clase Subscriptor recibe correctamente la notificación de un nuevo número de revista', () => {
        let Marca: Revista = new Revista("Marca","El Atlético de Madrid pierde 1-0 contra el Manchester City", []);
        let updated: string = "---- Nuevo número de la revista " + Marca.get_nombre() + " ----\n";
        updated += "Marca","El Atlético de Madrid pierde 1-0 contra el Manchester City";

        expect(Leonardo.update(Marca)).to.be.equal(updated);
    })

})

describe('Tests ejercicio PE 101 06/04/2022 - Clase Revista', () => {
    let Leonardo: Subscriptor = new Subscriptor("Leonardo","alu0101233093@ull.edu.es",327327327);
    let Marca: Revista = new Revista("Marca","El Atlético de Madrid pierde 1-0 contra el Manchester City", []);
    it('La clase Revista devuelve el nombre correctamente', () => {
        expect(Marca.get_nombre()).to.be.equal("Marca");
    })

    it('La clase Revista devuelve el contenido correctamente', () => {
        expect(Marca.get_contenido()).to.be.equal("El Atlético de Madrid pierde 1-0 contra el Manchester City");
    })

    it('La clase Revista no permite desubscribir a un subscriptor no registrado', () => {
        expect(Marca.unsubscribe(Leonardo)).to.be.false;
    })

    it('La clase Revista permite subscribir a un subscriptor no registrado', () => {
        expect(Marca.subscribe(Leonardo)).to.be.true;
    })

    it('La clase Revista no permite subscribir a un subscriptor registrado', () => {
        expect(Marca.subscribe(Leonardo)).to.be.false;
    })

    it('La clase Revista permite desubscribir a un subscriptor registrado', () => {
        expect(Marca.unsubscribe(Leonardo)).to.be.true;
    })
})