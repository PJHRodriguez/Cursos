/* Realiza una comparacion y si se cumple
hace la primera condicion y si no lo segunda*/
let a= 8;
let s = (a  > 0) ? 'Es positivo' : 'Es negativo'

console.log(s);

let v= 'A';
let r = (v === 'a' || v === 'A') ? `${v} es vocal`
       :(v === 'e' || v === 'E') ? `${v} es vocal`
       :(v === 'i' || v === 'I') ? `${v} es vocal`
       :(v === 'o' || v === 'O') ? `${v} es vocal`
       :(v === 'u' || v === 'U') ? `${v} es vocal`
       :`${v} no es vocal`;
console.log(r);