import React, { useState } from 'react'

function HtmlSeis() {
    const [numero1,setNumero1] = useState()
    const [numero2,setNumero2] = useState()
    const [resultado,setResultado] = useState()

    const sumar=()=>{
        setResultado(Number(numero1)+Number(numero2))
    }
    const modificar=(e)=>{
        setNumero1(e.target.value)
    }

    const modificar2=(e)=>{
        setNumero2(e.target.value)
    }
    
  return (
    <div className='HtmlSeis'>

        <input onChange={modificar} value={numero1}type="number" /> +
        <input onChange={modificar2} value={numero2}type="number" /> =
        <input type="number" value={resultado} readOnly/>
        <button onClick={sumar}>Sumar</button>
    </div>
  )
}

export default HtmlSeis
