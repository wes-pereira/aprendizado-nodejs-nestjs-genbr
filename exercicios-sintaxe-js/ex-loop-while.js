
 /*
 3- Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de
 21 anos. Total de pessoas com mais de 50 anos. O programa termina quando
 idade for =-99. (WHILE)
 */

 const prompt = require("prompt-sync")()

 //let fim = 0

 
 let idade21 = 0
 let idade50 = 0

 while (true){
    let idade = Number(prompt("Digite a idade (-99 para encerrar): "))

    if(idade < 21){
        idade21++

    }else if (idade > 50){
        idade50++

    }else if(idade == -99){
        break
    }
 }

 console.log(`Total de pessoas com menos de 21 anos: ${idade21}`)
 console.log(`Total de pessoas com mais de 50 anos: ${idade50}`)
