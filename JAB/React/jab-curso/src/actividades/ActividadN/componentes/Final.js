import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto'

const Final = () => {
    const {laCorrecta} = useContext(Contexto)
    const navegacion = useNavigate()
  return (
    <div>
      <h1>Vaya,respuesta incorrecta</h1>
      <h2>La respuesta correcta era: <strong>{laCorrecta}</strong></h2>
      <div className='imagen'>
        <img src="./imagenes/el_ahorcado6.png"/>
      </div>
      <button onClick={()=>navegacion("/juego")}>Volver a jugar</button>
    </div>
  )
}

export default Final
