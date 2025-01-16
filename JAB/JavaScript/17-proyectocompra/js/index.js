leer();
document.querySelector(".compra").addEventListener("click", guardar);
document.querySelector(".vaciar").addEventListener("click", limpiar);
document.querySelector("#producto").addEventListener("keydown", teclado);

function teclado(e) {
  e.key === "Enter" && guardar();
}

function vaciar() {
  document.querySelector("#producto").value = "";
  document.querySelector("#producto").focus();
}

function limpiar() {
  fetch("php/vaciar.php")
    .then((respuesta) => respuesta.text())
    .then(mostrar(null));
}

function guardar() {
  const PRODUCTO = document.querySelector("#producto").value.trim();
  if (PRODUCTO) {
    const DATO = {
      aGuardar: PRODUCTO,
    };
    fetch("php/insertar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DATO),
    })
      .then((u) => u.text())
      .then((o) => leer());
  }
}

function leer() {
  fetch("php/leer.php")
    .then((datos) => datos.json())
    .then((resultado) => {
      mostrar(resultado);
    });
}

function mostrar(resultado) {
  const CAJA = document.querySelector(".caja");
  CAJA.innerHTML = "";
  if (resultado) {
    resultado.map((valor) => {
      CAJA.insertAdjacentHTML(
        "beforeend",
        `
              <div>
              ${JSON.parse(valor.productos)}
              </div>    
              `
      );
    });
  }
  vaciar();
}
