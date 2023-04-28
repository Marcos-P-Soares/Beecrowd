const prompt = require('prompt-sync')();

let fibonacci =[0,1];
let n = Number(prompt());
for(i=2;i<60;i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
while(n!==0){
    let x = Number(prompt());
    console.log(`Fib(${x}) = ${fibonacci[x]}`);
    n--;
}