//Ricibira una cantidad indefinida de datos
function sumar(...numeros){
    let s = 0;
    for(let n of numeros){
        s +=n;
    }
    return s;
}

const r =sumar(40,5,56,78,88);
console.log(r);