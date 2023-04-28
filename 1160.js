//A primeira linha da entrada contém um único inteiro T, indicando o número de casos de teste (1 ≤ T ≤ 3000).
//Cada caso de teste contém 4 números: dois inteiros PA e PB (100 ≤ PA < 1000000, PA < PB ≤ 1000000) 
//indicando respectivamente a população de A e B, e dois valores G1 e G2 (0.1 ≤ G1 ≤ 10.0, 0.0 ≤ G2 ≤ 10.0, G2 < G1) 
//com um digito após o ponto decimal cada, indicando respectivamente o crescimento populacional de A e B (em percentual).
const prompt = require('prompt-sync')();

const t = Number(prompt());

for(let i = 0; i<t;i++){
    let [PA,PB,CA,CB] = prompt().split(' ').map(Number);
    let count = 0;
    while (PB>=PA){
        PA += Math.floor(PA * CA/100);
        PB += Math.floor(PB * CB/100);
        count++;
    }
    if(count <=100){
        console.log(`${count} anos`);
    } else{
        console.log('Mais de 1 século')
    }
}