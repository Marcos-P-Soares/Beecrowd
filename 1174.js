const prompt = require('prompt-sync')();
const lista = [];
for(i=0;i<100;i++){
    lista[i] = Number(prompt());
    if(lista[i]<=10){
        console.log(`A[${i}] = ${lista[i]}`)
    }
}