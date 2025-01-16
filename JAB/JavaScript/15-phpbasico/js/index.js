fetch("php/select.php")
  .then((respuesta) => respuesta.json())
  .then((valor) => valor.forEach(mostrar))
  .catch((error) => console.log(error));

function mostrar(lenguaje) {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",

    lenguaje["id"] +
      "° " +
      lenguaje["nombre_de_lenguaje"] +
      " de " +
      lenguaje["creador"] +
      " (" +
      lenguaje["inicio"] +
      ")<br>"
  );
}
