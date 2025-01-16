let c = 0;

while(c<=9){
    c++;
    
    if(c === 5){
        console.log('Termina el bucle');
        break;
    }
    if(c === 3){
        console.log('Salta a la siguiente linea');
        continue;
    }
    console.log(c);
}