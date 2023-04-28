const prompt = require('prompt-sync')();

let notas = [];
let count = 0;
while(count < 2){
    let nota = Number(prompt(''));
    if (nota >= 10 || nota <= 0){
        console.log('nota invalida');
    }else{
        notas.push(nota);
        count++
    }
}
let media = (notas[0] + notas[1]) / 2;
console.log('media = '+media);