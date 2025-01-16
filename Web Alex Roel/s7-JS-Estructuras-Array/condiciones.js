
if(false){
    console.log('Se cumple la condicion');
}else{
    console.log('No se cumple la condicion');
}

let n=5, print= '';

if(n%2 === 0){
    print = `El numero ${n} es par`;
}else{
    print = `El numero ${n} es impar`;
}
console.log(print);
/* ========================*/

if(n !== 0){
    if(n%2 === 0){
        print = `El numero ${n} es par`;
    }else{
        print = `El numero ${n} es impar`;
    }
    console.log(print);
    if(n>0){
        print = `El numero ${n} es positivo`;
    }else{
        print = `El numero ${n} es negativo`;
    }
}else{
    print = `El numero ${n} es neutro`;
}

console.log(print);