const prompt = require('prompt-sync')();

// let n = Number(prompt());
// for(i=0;i<n;i++){
//     let print = [];
//     for(j=1;j<4;j++){
//         print.push(j + (i*4))
//     }
//     console.log (print[0], print[1], print[2],'PUM');
// }

let n = Number(prompt());
for(i=0;i<n;i++){
    let print = [];
    for(j=1;j<4;j++){
        print.push(j + (i*3))
    }
    console.log (print[0], print[1], print[2]);
}
