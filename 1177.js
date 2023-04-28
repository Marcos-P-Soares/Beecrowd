// Faça um programa que leia um valor T e preencha um vetor N[1000] com a sequência de valores de 0 até T-1 repetidas vezes, conforme exemplo abaixo. Imprima o vetor N.
const prompt = require('prompt-sync')();

let parada = prompt();
let lista = [];
let count = 0;
while(count !== 1000){
    let i = 0;
    while(i<parada){
        lista[count] = i;
        i++;
        console.log(`N[${count}] = ${lista[count]}`);
        count++;
        if(count === 1000){
            break;
        }
    }
}