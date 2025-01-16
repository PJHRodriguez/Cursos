//Variables
let edad = 18;
const NOMBRE = "Pablo";
let lenguaje = "JavaScript";
let mayor;
//Operadores
let resultado = edad + 2;
let aprobado = resultado >= 5;
let notaMaxima = resultado == 10;
//Ternario
let aprobado2 = resultado >= 5 ? "Has aprobado" : "Has suspendido";
let notaMaxima2 =
  resultado == 10 ? "Has sacado la nota maxima" : "No tienes nota maxima";
//Eventos/Funciones/Selectores
document.querySelector("button").addEventListener("click", mostrarResultado);

function mostrarResultado() {
  document.querySelector(".caja").innerHTML = aprobado2;
}
//condicionales
if (edad > 18) mayor = true;
else mayor = false;

//Buble

for (let i = 0; i < 10; i++) {
  document.querySelector(".caja").innerHTML += `<div>${i + 1}</div>`;
}

//Arrays
let notas = [
  {
    nota: 5,
    nombre: "Jorge",
  },
  {
    nota: 10,
    nombre: "Mariana",
  },
  {
    nota: 8.5,
    nombre: "Pablo",
  },
  {
    nota: 7.3,
    nombre: "Antonio",
  },
  {
    nota: 9,
    nombre: "Miguel",
  },
  {
    nota: 3.4,
    nombre: "Ana",
  },
];
notas.map((valor) => console.log(`${valor.nombre} ha sacado >> ${valor.nota}`));
