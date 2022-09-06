
import { Animal } from "./animal";

export class BichoPreguica extends Animal{

    private estaChao: Boolean

    constructor(
        nome: string,
        idade: number,
        estaChao: Boolean
    ){
        super(nome, idade)
        this.estaChao = estaChao
    }

    movimento(): void{
        if (this.estaChao == true){
            console.log("Subindo em uma árvore...")
        }else{
            console.log("Descendo de uma árvore...")
        }

    }
    
    emitirSom(): void {
       console.log("Sons de bicho-preguiça...")
    }
}
    
