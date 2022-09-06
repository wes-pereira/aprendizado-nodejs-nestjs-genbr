
/*
1- Faça um programa que receba três inteiros e diga qual deles é o maior.
*/

const prompt = require("prompt-sync")()

console.log("Digite três números para saber qual é o maior.")

let n1 = Number(prompt("Primeiro número: "))
let n2 = Number(prompt("Segundo número: "))
let n3 = Number(prompt("Terceiro número: "))

if (n1 > n2 && n1 > n3){
    console.log(`O maior número digitado foi ${n1}`)
}else if (n2 > n1 && n2 > n3){
    console.log(`O maior número digitado foi ${n2}`)
}else if (n3 > n1 && n3 > n2){
    console.log(`O maior número digitado foi ${n3}`)
}else{
    console.log("Carácter digitado é inválido.")
}