const prompt = require('prompt-sync')();

let n = Number(prompt());
const fibonacci =[];
fibonacci [0] = 0;
fibonacci [1] = 1;
if(n === 1){
    console.log(fibonacci.toString().replace(/,/g, ' '));
}else{
    for(i=2;i<n;i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    console.log(fibonacci.toString().replace(/,/g, ' '));
}