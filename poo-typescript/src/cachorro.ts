
import { Animal } from "./animal"

export class Cachorro extends Animal{
    cor: string
    raca: string

    constructor(
        nome:string,
        idade: number,
        cor: string,
        raca: string
    ){
        super(nome, idade)
        this.cor = cor
        this.raca = raca
    }

    movimento(): void {
        console.log("Correndo como um dog...")
    }
    emitirSom(): void {
        console.log("Latindo...")
    }
}
