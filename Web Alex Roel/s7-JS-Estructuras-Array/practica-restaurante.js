let consumo = 100 ,descuento, datoDescuento;
if(consumo <=100){
    datoDescuento = '10%';
    descuento = consumo * 0.1;
}else if(consumo >100){
    datoDescuento = '20%';
    descuento = consumo * 0.2;
}else if(consumo >200){
    datoDescuento = '30%';
    descuento = consumo * 0.3;
}

let montoDescuento = consumo - descuento;
let iva = montoDescuento * 0.19;
let total = montoDescuento + iva;

console.log(consumo);
console.log(descuento);
console.log(datoDescuento);
console.log(montoDescuento);
console.log(iva);
console.log(total);