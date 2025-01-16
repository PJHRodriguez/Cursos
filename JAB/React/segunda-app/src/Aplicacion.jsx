import React, { useEffect, useState } from 'react'
import parrafos from "./data/quijote.json"
import { Btn,Row } from './styledAplicacion';


function Aplicacion() {

  const [parrafoActual,setParrafoActual] = useState(0);

  useEffect(()=>{

    const colorAleatorio = `rgb(${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)})`

    document.body.style.backgroundColor = colorAleatorio
  },[parrafoActual])

  const siguienteParrafo=()=>{
    if(parrafoActual!== parrafos.length-1) setParrafoActual(parrafoActual+1)
  }
  const anteriorParrafo=()=>{
    if(parrafoActual!== 0) setParrafoActual(parrafoActual-1)
  }
  return (
    <div>
      <p>{parrafos[parrafoActual]}</p>
      <Row>
        <Btn onClick={anteriorParrafo}>Anterior</Btn>
        <Btn onClick={siguienteParrafo}>Siguiente</Btn>
      </Row>
    </div>
  )
}

export default Aplicacion
