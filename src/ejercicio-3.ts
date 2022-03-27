export class Cifrado{
    /**
     * Constructor de la clase Cesar
     * @param alfabeto alfabeto en el que se basa el cifrado
     * @param clave palabra clave usada para cifrar
     */
    constructor(private  alfabeto: string[], private clave: string){}

    /**
     * Permite cifrar una palabra
     * @param palabra palabra que se desea cifrar
     * @returns palabra cifrada
     */
    public cifrar(palabra: string): string{
        for(let i = 0; i < palabra.length; i++){
            if(!this.alfabeto.includes(palabra[i]))
                return "";
        }

        let resultado: string = "";

        for(let i = 0, j = 0; i < palabra.length; i++, j++){
            if(this.clave.length - 1 == j)
                j = 0;
            
            let index: number = (this.alfabeto.indexOf(palabra[i]) + this.alfabeto.indexOf(this.clave[j])) % this.alfabeto.length;
            resultado += this.alfabeto[index];
        }

        return resultado;
    }

    /**
     * Permite descifrar una palabra
     * @param palabra palabra que se desea descifrar
     * @returns palabra descifrada
     */
    public descifrar(palabra: string): string{
        for(let i = 0; i < palabra.length; i++){
            if(!this.alfabeto.includes(palabra[i]))
                return "";
        }
        
        let resultado: string = "";

        for(let i = 0, j = 0; i < palabra.length; i++, j++){
            if(this.clave.length - 1 == j)
                j = 0;
            
            let index: number = (this.alfabeto.indexOf(palabra[i]) - this.alfabeto.indexOf(this.clave[j])) % this.alfabeto.length;
            resultado += this.alfabeto[index];
        }

        return resultado;
    }

    /**
     * Permite cambiar la clave de cifrado
     * @param nueva Clave nueva
     */
    public set_clave(nueva: string): void{
        for(let i = 0; i < nueva.length; i++){
            if(!this.alfabeto.includes(nueva[i]))
                return;
        }
        this.clave = nueva;
    }

    /**
     * Permite cambiar el alfabeto en el que se basa el cifrado
     * @param nuevo Alfabeto nuevo
     */
    public set_alfabeto(nuevo: string[]): void{
        this.alfabeto = nuevo;
        this.clave = "";
    }

    /**
     * Método getter de la clave
     * @returns clave
     */
    public get_clave(): string{
        return this.clave;
    }

    /**
     * Método getter de alfabeto
     * @returns alfabeto
     */
    public get_alfabeto(): string[]{
        return this.alfabeto;
    }
}

