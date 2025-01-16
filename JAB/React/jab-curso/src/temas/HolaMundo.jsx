import React from 'react'
import imagen from '../imgs/imagen.jpg'

function HolaMundo() {
    let persona = [{nombre:"Pablo",apellido:"Hernandez"},{nombre:"Pedro",apellido:"Perez"}]
    let caja = <div>Nombre</div>
  return (
    <div className='fondo'>
      <h1>Curso de react</h1>
      <img src={imagen}/>
      <br/>
      <input type="text" value={persona[0].nombre}/>
      <div>{persona[1].apellido}</div>
      {caja}
      <br/>
    </div>
  )
}

export default HolaMundo
