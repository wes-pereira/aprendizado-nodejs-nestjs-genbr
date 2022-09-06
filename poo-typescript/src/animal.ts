export abstract class Animal{
    nome: string
    idade: number

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    abstract movimento(): void

    abstract emitirSom(): void

}