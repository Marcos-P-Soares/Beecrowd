const prompt = require('prompt-sync')();
let n = Number(prompt());
for(i=1;i<n;i++){
    let quadrado = i**2;
    let cubo = i**3;
    console.log(i,quadrado,cubo);
    console.log(i,quadrado+1,cubo+1);
}