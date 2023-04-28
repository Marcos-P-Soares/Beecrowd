const prompt = require('prompt-sync')();
//Leia um valor e faça um programa que coloque o valor lido na primeira posição de um vetor N[10].
//Em cada posição subsequente, coloque o dobro do valor da posição anterior. 
//Por exemplo, se o valor lido for 1, os valores do vetor devem ser 1,2,4,8 e assim sucessivamente. Mostre o vetor em seguida
let n = Number(prompt());
const lista = [];
lista[0] = n;
console.log(`X[${0}] = ${lista[0]}`)
for(i=1;i<10;i++){
    lista[i] = lista[i-1] * 2;
    console.log(`X[${i}] = ${lista[i]}`)
}
