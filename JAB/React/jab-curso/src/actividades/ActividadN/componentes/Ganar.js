import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ganar = () => {
    const navegacion = useNavigate()
  return (
    <div>
      <h1>Has ganado felicidades para poder jugar de nuevo presiona el boton</h1>
      <div className='imagen'>
        <img src="./imagenes/el_ahorcado1.png"/>
      </div>
      <button onClick={()=>navegacion("/juego")}>Volver a jugar</button>
    </div>
  )
}

export default Ganar
