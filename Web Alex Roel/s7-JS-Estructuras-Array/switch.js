let letra = 'A';

switch(letra){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(`La ${letra} es una vocal`);
        break;
    default:
        console.log(`La ${letra} no es una vocal`);
        break;
}