const prompt =require('prompt-sync')();

let n = Number(prompt());
let fat = 1;
for(i=n;i>=1;i--){
    fat *= i;
}
console.log(fat);