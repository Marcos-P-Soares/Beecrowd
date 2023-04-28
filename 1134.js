// A entrada contém apenas valores inteiros e positivos.
//1.Álcool 2.Gasolina 3.Diesel 4.Fim
// Deve ser escrito a mensagem: "MUITO OBRIGADO" e
// a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.

const prompt = require('prompt-sync')();

let alcool = 0;
let gasosa = 0;
let diesel = 0;

while(true){
    let number = Number(prompt('Digite sua opção:'));
    if(number === 4){
        break;
    }
    switch(number){
        case 1:
            alcool++;
            continue;
        case 2:
            gasosa++
            continue;
        case 3:
            diesel++
            continue;
        default:
            continue;
    }
}
console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasosa}`);
console.log(`Diesel: ${diesel}`);