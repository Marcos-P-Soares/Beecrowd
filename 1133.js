const prompt = require('prompt-sync')();
let x = Number(prompt());
let y = Number(prompt());
let maior;
let menor;
if(x>y){
    maior = x;
    menor = y;
} else{
    maior = y;
    menor = x;
}
for(i=menor +1 ; i<maior; i++){
    if(i%5 === 2 || i%5 === 3){
        console.log(i);
    }
}
