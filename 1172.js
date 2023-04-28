//Faça um programa que leia um vetor X[10]. 
//Substitua a seguir, todos os valores nulos e negativos do vetor X por 1. Em seguida mostre o vetor X.
const prompt = require('prompt-sync')();
const lista = [];
for(i=0;i<=10;i++){
    lista[i] = Number(prompt());
    if(lista[i] === 0 || lista[i]<0){
        lista[i] = 1;
    }
    console.log(`X[${i}] = ${lista[i]}`);
}