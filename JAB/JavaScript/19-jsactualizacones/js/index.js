// 1- Puedes poner _ a las variables numericas para separar por unidades
let dinero = 11_525_000;
console.log(++dinero);

/*
2-
&&= Compara si la variable no es null,NaN o esta vacia y si cumple la condicion realiza la asignacion
||= Compara si la variable es null,NaN o esta vacia y si cumple la condicion realiza la asignacion
??= Compara si la variable es null o undefined y si lo es realiza la asignacion
?? Compara si la variable es null o undefined y si lo es ejecuta la funcion pero no hace la asignacion

*/
let usuarios = ["Jab", "Pablo", "Rosa", "Eva"];
let usuario = usuarios.at(-1);

usuario && console.log(`Usuario ${usuario} ha sido el ultimo`);
console.log((usuario &&= `Usuario ${usuario} ha sido el ultimo`));
console.log((usuario ??= `Usuario desconocido`));
console.log(usuario ?? `Usuario desconocido`);

//findLAst Encuentra el ultimo que cumple con las condiciones
//findLAstIndex  Encuentra el ultimo indice que cumple con las condiciones
let notas = [2, 10, 1, 10, 4, 5];
const LANOTA = notas.findLast((nota) => nota >= 5);
console.log(LANOTA);

//hasOwnProperty Busca una propiedad
let persona = { nombre: "Pablo", edad: 24 };
const existe = persona.hasOwnProperty("edad");
console.log(existe);

//replaceAll reemplaza todas las ocurrencias de un patrón
let frase =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut orci eu adipiscing euismod suscipit. adipiscing ";

console.log(frase.replaceAll("adipiscing", "JavaScript"));

//Crean un array sin comprometer al original
//                   v
//toReversed -> Cambia las posiciones de los datos al reves
//toSorted -> Ordena los elementos
//with -> reemplaza el valor de un elemento del arrray
//toSpliced elimina elemntos del array
let nombres = ["Jab", "Pablo", "Alberto", "Roberto"];
let nombres2 = nombres.toReversed();
let nombres3 = nombres.toSorted();
let nombres4 = nombres.with(0, "JAB");
let nombres5 = nombres.toSpliced(2, 1);
console.log(nombres);
console.log(nombres2);
console.log(nombres3);
console.log(nombres4);
console.log(nombres5);
