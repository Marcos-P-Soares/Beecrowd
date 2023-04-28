const prompt = require('prompt-sync')();
let somaIdade = 0;
let cont = 0;
while(true){
    let idade = Number(prompt());
    if(idade < 0){
        break;
    }
    somaIdade += idade;
    cont++;
}
let mediaIdade = somaIdade / cont;
console.log(mediaIdade);