//Faça um programa que leia um vetor N[20].
//Troque a seguir, o primeiro elemento com o último, o segundo elemento com o penúltimo,
//etc., até trocar o 10º com o 11º. Mostre o vetor modificado.
const prompt = require('prompt-sync')();
const lista = [];
for(i=0;i<20;i++){
    lista.push(Number(prompt));
}
for(i=0;i<10;i++){
    let aux = lista[i];
    lista[i] = lista[lista.length-1-i];
    lista[lista.length-1-i] = aux;
}
for(i=0;i<20;i++){
    console.log(`A[${i}] = ${lista[i]}`);
}
