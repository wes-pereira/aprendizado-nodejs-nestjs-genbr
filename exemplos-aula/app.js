const prompt = require("prompt-sync")()

//Output
//console.log("Olá Mundo")

//Exemplo de um código em javascript
console.log("***Bem vinde***\n")

// const - constante / let - declarando uma variavel
let nome = prompt("Digite o seu nome: ")

let idade = Number(prompt("Digite a sua idade: "))

let altura = Number(prompt("Digite a sua altura: "))

//Concatenando com +
console.log("Olá, meu nome é " + nome + " minha idade é " + idade + 
" e minha altura é: " + altura)

//Concatenando com ${}
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos de idade ` +
`e eu tenho ${altura} de altura`)