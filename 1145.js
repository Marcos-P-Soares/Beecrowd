const prompt = require('prompt-sync')();
// Escreva um programa que leia dois valores X e Y. A seguir, mostre uma sequência de 1 até Y, 
// //passando para a próxima linha a cada X números.

// Entrada
// O arquivo de entrada contém dois valores inteiros, (1 < X < 20) e (X < Y < 100000).

// Saída
// Cada sequência deve ser impressa em uma linha apenas, com 1 espaço em branco entre cada número, conforme exemplo abaixo.
// // Não deve haver espaço em branco após o último valor da linha.
let [x, y] = prompt().split(' ').map(Number);
let lista = [];
let count = 0;
for(i=1;i<=y;i++){
    lista[count] = i;
    count++;
    if(count === x || i == y){
        console.log(lista.toString().replace(/,/g,' '));
        count = 0;
        lista =[]
    }
}
