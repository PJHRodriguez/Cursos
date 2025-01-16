import React, { useState } from 'react'

function ActividadE() {

    const [argentino,setArgentino] = useState()
    const [colombiano,setColombiano] = useState()
    const [mexicano,setMexicano] = useState()
    const [dolar,setDolar] = useState()
    const cambios=[
        {
          moneda: "Euro",
          cambio:1,
        },{
          moneda: "Peso argentino",
          cambio:118.6,
        },{
          moneda: "Peso colombiano",
          cambio:4543.5,
        },{
          moneda: "Peso mexicano",
          cambio:23.2,
        },{
          moneda: "Dólar",
          cambio:1.14
        }
      ]

    const conversion=(e)=>{
        setArgentino(e.target.value * cambios[1].cambio)
        setColombiano(e.target.value * cambios[2].cambio)
        setMexicano(e.target.value * cambios[3].cambio)
        setDolar(e.target.value * cambios[4].cambio)
    }
  return (
    <div className='ActividadE'>
      <label htmlFor='u0'>{cambios[0].moneda}</label>
      <input id="u0" onChange={conversion}type="number" />
      <label htmlFor='u1'>{cambios[1].moneda}</label>
      <input id="u1"type="number" value={argentino}readOnly />
      <label htmlFor='u2'>{cambios[2].moneda}</label>
      <input id="u2"type="number" value={colombiano}readOnly />
      <label htmlFor='u3'>{cambios[3].moneda}</label>
      <input id="u3"type="number" value={mexicano}readOnly />
      <label htmlFor='u4'>{cambios[4].moneda}</label>
      <input id="u4"type="number" value={dolar}readOnly />

    </div>
  )
}

export default ActividadE
