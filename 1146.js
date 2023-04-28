const prompt = require('prompt-sync')();

while(true){
    let x = Number(lines.shift());
    if(x === 0){
        break;
    }
    const lista =[];
    let j = 0;
    for(i=1;i<=x;i++){
        lista.push(i);
    }
    console.log(lista.toString().replace(/,/g, ' '));
}