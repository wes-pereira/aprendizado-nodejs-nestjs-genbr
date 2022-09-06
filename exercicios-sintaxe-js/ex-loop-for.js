
/*
1- Informar todos os números de 1000 a 1999 que quando divididos por 11
obtemos resto = 5. (FOR)
*/

const prompt = require("prompt-sync")()

for (let i = 1000; i < 2000; i++ ){
    if (i % 11 == 5){
        console.log(i)
    }
}