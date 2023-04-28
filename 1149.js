// Faça um algoritmo para ler um valor A e um valor N. 
//Imprimir a soma de A + i para cada i com os valores (0 <= i <= N-1). 
// Enquanto N for negativo ou ZERO, um novo N(apenas N) deve ser lido.

// A entrada contém somente valores inteiros, podendo ser positivos ou negativos. Todos os valores estão na mesma linha.
const prompt = require('prompt-sync')();
let valores = prompt().split(' ').map(Number);
let A = valores[0];
let N = valores[valores.length-1];

let soma = 0;
for(i=0;i<N;i++){
    soma = soma + (A + i);
}
console.log(soma);
