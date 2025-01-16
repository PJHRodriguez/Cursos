import React, { useEffect, useState } from 'react'

function ActividadH() {
    const [chiste,setChiste] = useState("")

    
    useEffect(()=>{
        nuevoChiste()
    },[])
    
    const nuevoChiste=()=>{
        const url = "https://api.chucknorris.io/jokes/random"
        const peticion = fetch(url)
        peticion
        .then(datos=> datos.json())
        .then(lectura=> setChiste(lectura.value))
        .catch(()=> console.log("Ha ocurrido un problema"))
    }
    
  return (
    <div>
    <div>{chiste}</div>
      <button onClick={nuevoChiste}>Otro chiste</button>
    </div>
  )
}

export default ActividadH
