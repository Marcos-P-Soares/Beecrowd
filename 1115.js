const prompt = require('prompt-sync')();

let parada = Number(prompt());
for(i=0;i<parada;i++){
  let divisao = 0;
  let [x,y] = prompt('digite seu número:').split(' ').map(Number);
  if( y === 0 ){
    console.log('divisao impossivel');
    continue;
  }
  divisao = x / y;
  console.log(divisao.toFixed(1));
}