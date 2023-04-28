const prompt = require('prompt-sync')();
// Na matemática, um número perfeito é um número inteiro para o qual a soma de todos os seus divisores positivos próprios
// (excluindo ele mesmo) é igual ao próprio número. Por exemplo o número 6 é perfeito, pois 1+2+3 é igual a 6. 
// Sua tarefa é escrever um programa que imprima se um determinado número é perfeito ou não.

let t = Number(prompt());
while(t!==0){
    let x = Number(prompt());
    let soma = 0;
    for(i=1;i<x;i++){
        if(x%i == 0){
            soma+=i;
        }
    }
    if(soma == x){
        console.log(x,'eh pefeito');        
    }else{
        console.log(x,'nao eh perfeito');
    }
    t--
}