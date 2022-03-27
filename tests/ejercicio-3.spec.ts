import { expect } from 'chai';
import { Cifrado } from '../src/ejercicio-3';

describe('Tests ejercicio 3 - Clase Cesar', () => {

    let ejemplo: Cifrado = new Cifrado([], "");
    it('La clase Cesar permite definir el alfabeto', () => {
        let alfb: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
        ejemplo.set_alfabeto(alfb);
        expect(ejemplo.get_alfabeto()).to.be.eql(alfb);
    })

    it('La clase Cesar no permite definir la clave si algún caracter no se encuentra en el alfabeto', () => {
        ejemplo.set_clave("hola_mundo");
        expect(ejemplo.get_clave()).to.be.equal("");
    })

    it('La clase Cesar permite definir la clave', () => {
        let clave: string = "ccc";
        ejemplo.set_clave(clave);
        expect(ejemplo.get_clave()).to.be.equal(clave);
    })

    let sin_cifrar: string = "crepusculo";
    let cifrada: string = "";
    it('La clase Cesar no permite cifrar una palabra si algún caracter no se encuentra en el alfabeto', () => {
        expect(ejemplo.cifrar("agüero")).to.be.equal("");
    })

    it('La clase Cesar permite cifrar una palabra', () => {
        cifrada = ejemplo.cifrar(sin_cifrar);
        expect(cifrada).to.be.not.equal(sin_cifrar);
    })

    it('La clase Cesar no permite descifrar una palabra si algún caracter no se encuentra en el alfabeto', () => {
        expect(ejemplo.descifrar("MAÑANA")).to.be.equal("");
    })

    it('La clase Cesar permite descifrar una palabra', () => {
        expect(ejemplo.descifrar(cifrada)).to.be.equal(sin_cifrar);
    })
})