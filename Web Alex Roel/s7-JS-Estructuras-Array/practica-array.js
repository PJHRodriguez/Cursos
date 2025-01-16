let pares = [];
let impares = [];
let numeros = [1,2,3,4,5,6,7,8,9];
let random = 0;
for(let n of numeros){
    random = parseInt(Math.random()*100);
    let r = random * n;
    if(r % 2 === 0){
        console.log(`${n} x ${random} = ${r}`);
        pares.push(r);
    }else{
        console.log(`${n} x ${random} = ${r}`);
        impares.push(r);
    }
}
console.log('Array de pares: ',pares);
console.log('Array de impares: ',impares);