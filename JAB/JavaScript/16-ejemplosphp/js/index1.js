let lenguaje = "Python";
let miArray = [
  { lenguaje: "JavaScript", inicio: 1995 },
  { lenguaje: "PHP", inicio: 1994 },
];

fetch("php/index1.php", {
  method: "POST",
  body: JSON.stringify({
    lenguaje,
    miArray,
  }),
})
  .then((valor) => valor.json())
  .then((respuesta) => mostrar(respuesta));

function mostrar(res) {
  res.map((valor) =>
    document.querySelector("body").insertAdjacentHTML(
      "beforeend",
      `
        <div>
        ${valor.lenguaje}-(${valor.inicio})
        </div>
    `
    )
  );
}
