import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'

function Profesora() {
    const {alumno} = useContext(Contexto)
    const idioma = alumno[3].idioma
    const imagen = `../images/${alumno[idioma].foto}`
  return (
    <div className='profesora'>
      <h1>{alumno[idioma].boton1}</h1>
      <div className='foto'>
        <img src={imagen} alt="imagen" />
      </div>
      <div className='nombre'>{alumno[idioma].nombre}</div>
    </div>
  )
}

export default Profesora
