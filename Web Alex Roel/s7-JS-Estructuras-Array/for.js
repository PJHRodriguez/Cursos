let n = 5;
for(let i = 0; i<=10;i++){
    console.log(`${n} x ${i} = ${n*i}`);
}
let texts = 'JavaScript';
console.log(texts[0]);
let estudiantes = ['Pablo', 'Alex','Juan', 'Pedro'];

for(let dato in texts){
    console.log(dato);
    //Regresa los indices de cada palabra de texts
} 
for(let dato of estudiantes){
    console.log(`Hola ${dato}`);
    //Regresa el elemento de cada indice
}