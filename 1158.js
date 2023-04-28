const prompt = require('prompt-sync')();
// Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de Y ímpares consecutivos
// a partir de X inclusive o próprio X se ele for ímpar. Por exemplo:
// para a entrada 4 5, a saída deve ser 45, que é equivalente à: 5 + 7 + 9 + 11 + 13
// para a entrada 7 4, a saída deve ser 40, que é equivalente à: 7 + 9 + 11 + 13

let n = Number(prompt());

while(n!==0){
    let [x,y] = prompt().split(' ').map(Number);
    let soma = 0;
    let count = 0;
    while(y>count){
        if(x%2===0){
            soma += x+1;
            count++
            x+=2;
        }else{
            soma+= x;
            count++
            x+=2;
        }
    }
    console.log(soma);
    n--
}