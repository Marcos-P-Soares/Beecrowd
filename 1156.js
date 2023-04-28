let s = 1;
let up = 3;
let low = 2;
while(up !== 39){
    s+= up/low;
    up = up +2;
    low = low * 2;  
}
console.log(s.toFixed(2));