
import { Animal } from "./animal"

export class Cavalo extends Animal{
    porte: string
    regiao: string

    constructor(
        nome: string,
        idade: number,
        porte: string,
        regiao: string
    ){
        super(nome, idade)
        this.porte = porte
        this.regiao = regiao
    }


    movimento(): void {
        console.log("Galopando...")
        
    }
    
    emitirSom(): void {
        console.log("Relinchando...")
    }
    
}

