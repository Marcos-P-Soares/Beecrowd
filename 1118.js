const prompt = require('prompt-sync')();

function CalMed(){
    let notas = [];
    let count = 0;
    while(true){
        let nota = Number(prompt());
        if( nota > 10 || nota < 0){
            console.log('nota invalida');
        }else{
            notas.push(nota);
            count++
        }
        if(count === 2){
            let media = (notas[0] + notas[1]) / 2;
            return media;
        }
    }
}
console.log(`media = ${CalMed()}`);
while(true){
    let x = 0;
    x = Number(prompt('novo calculo (1-sim 2=nao)'));
    if(x === 1){
        console.log('media = '+CalMed());
    }else if( x === 2){
        break;
    }
}
