import React from 'react'
import { useNavigate } from 'react-router-dom'

const Portada = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Bienvenido/a al juego de ahorcado</h1>
      <button  className="boton" onClick={()=>navigate("/juego")}>Jugar</button> 
    </div>
  )
}

export default Portada
