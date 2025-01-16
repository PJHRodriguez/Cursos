import React, { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

function PaginaDos() {
  const {color} = useContext(Contexto)
    return (
      <div className='hijo' style={{backgroundColor:color}}>
        <h1>Pagina 2</h1>
        <h1>{color}</h1>
      </div>
    )
}

export default PaginaDos
