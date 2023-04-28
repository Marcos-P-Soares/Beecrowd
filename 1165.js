const prompt = require('prompt-sync')();

let t = Number(prompt());
while(t!==0){
    let x = Number(prompt());
    let soma = 0;
    for(i=1;i<=x;i++){
        if(x%i == 0){
            soma+=i;
        }
    }
    if(soma === (x+1)){
        console.log(x,'eh primo');        
    }else{
        console.log(x,'nao eh primo');
    }
    t--
}