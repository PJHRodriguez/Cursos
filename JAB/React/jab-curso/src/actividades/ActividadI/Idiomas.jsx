import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'
import { Provider} from './contexto/Provider'

function Idiomas() {
  const {setAlumno} = useContext(Contexto)
  const {alumno} = useContext(Contexto)
  const sustitucion=(posicion)=>{
    setAlumno(
      alumno.map((dato,indice)=>
        indice==3
      ? {...dato,idioma:posicion}
      : {...dato}
      )
    )
  }

  const cambio1 =()=>{sustitucion(0)}
  const cambio2 =()=>{sustitucion(1)}
  const cambio3 =()=>{sustitucion(2)}
  return (
    <div className = "idiomas">
      <div onClick={cambio1} className = "bandera"> <img src="./images/spain.jpg" alt="bandera" /></div>
      <div onClick={cambio2} className = "bandera"> <img src="./images/uk.png" alt="bandera" /></div>
      <div onClick={cambio3} className = "bandera"> <img src="./images/francia.png" alt="bandera" /></div>
    </div>
  )
}

export default Idiomas
