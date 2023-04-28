/*Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos
números que não são múltiplos de 13 entre X e Y, incluindo ambos.

O arquivo de entrada contém 2 valores inteiros quaisquer, 
não necessariamente em ordem crescente.

Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada,
inclusive ambos se for o caso.*/
const prompt = require('prompt-sync')();
let x = Number(prompt());
let y = Number(prompt());
let maior;
let menor;
let soma = 0;
if(x>y){
    maior = x;
    menor = y;
} else{
    maior = y;
    menor = x;
}
for(i=menor; i<=maior; i++){
    if(i%13 !== 0){
        soma += i;
    }
}
console.log(soma);