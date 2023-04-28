const prompt = require('prompt-sync')();
let grenal = 0;
let inter = 0;
let gremio = 0;
let empate = 0;
let confirm = 0;
while(confirm !== 2){
    let resultado = prompt().split(' ').map(Number);
    if(resultado[0] === resultado[1]){
         empate++
    }else if (resultado[0] === resultado[1]){
        inter++
    }else{
        gremio++
    }
    grenal++
    console.log('Novo grenal (1-sim 2-nao)')
    confirm = Number(prompt());
}
console.log(`${grenal} grenais`);
console.log(`Inter:${inter}`);
console.log(`Gremio:${gremio}`);
console.log(`Empates:${empate}`);
if(inter === gremio){
    console.log("Nao houve vencedor");
}else if(inter > gremio){
    console.log('Inter venceu mais');
}else{
    console.log('Gremio venceu mais');
}