import React, { useState } from 'react'
import trabajosData from './data/rutinas'

function Rutina() {

  const [trabajoActual,setTrabajoActual]= useState(0)

  const trabajo=trabajosData[trabajoActual]
  return (
    <div>
        <h1>{trabajo.titulo}</h1>
        <div>
            {
                trabajo.rutina.map(ejercicio=><img src={ejercicio.img} alt="Imagen de ejercicio" />)
            }
        </div>

        <img src={trabajo.rutina[0].img} alt="Primera imagen" />
    </div>
  )
}

export default Rutina
