import React, { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

function PaginaUno() {
    const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{backgroundColor:color}}>
      <h1>Pagina 1</h1>
      <h1>{color}</h1>
    </div>
  )
}

export default PaginaUno
