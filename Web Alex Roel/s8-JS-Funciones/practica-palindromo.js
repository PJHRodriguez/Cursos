const palindromo = (Palabra)=>{
    //palindromo > oso ana oro
    Palabra = Palabra.replace(' ', '');
    Palabra = Palabra.toLowerCase();

    let palabraInvertida = Palabra.split('').reverse().join('');
    if(Palabra === palabraInvertida){
        return true;
    }else{
        return false;
    }
}
palindromo('carro');