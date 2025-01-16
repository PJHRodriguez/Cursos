import React from 'react'
import PaginaUno from './PaginaUno'
import Colores from './Colores'
import { Datos } from '../contexto/Contexto'
import PaginaDos from './PaginaDos'
import PaginaTres from './PaginaTres'

function UseContext() {
  return (
    <>
    <Datos>
        <div className='UseContext'>
            <PaginaUno/>
            <PaginaDos/>
            <PaginaTres/>
        </div>
        <Colores/>
    </Datos>
    </>
  )
}

export default UseContext
