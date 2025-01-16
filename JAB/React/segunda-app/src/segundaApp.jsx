import React, { useState } from 'react';

function SegundaApp() {
  const [resultado, setResultado] = useState(null);

  const elemento = <h1 className="centrar-titulo">Hola alumno</h1>;

  const botonPulsado = () => {
    const result = suma(7, 5);
    setResultado(result);
  };

  return (
    <div>
      <button onClick={botonPulsado} style={{ marginTop: '10px', marginLeft: '10px' }}>
        Dame click
      </button>
      <div>{elemento}</div>
      <div>{resultado && <h2>El resultado es: {resultado}</h2>}</div>
    </div>
  );
}

function suma(a, b) {
  return a + b;
}

export default SegundaApp;
