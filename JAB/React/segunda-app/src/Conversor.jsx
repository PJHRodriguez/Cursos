import React, { useRef } from 'react'

function Conversor() {

    const eurosRef= useRef(null)
    const resultadoRef = useRef(null)

    const calcular=()=>{
        
        const eurosValor = parseFloat(eurosRef.current.value)
        const dolares = eurosValor*1.08

        resultadoRef.current.innerHTML = dolares.toFixed(2) + " $ ";

    }

  return (

    <div className='conversor'>
      <h1>Conversor Euro-Dolar</h1>
      <input type="text" ref={eurosRef} />
      <button onClick={calcular}>Convertir</button>
      <div style={{fontSize : "1.5em", fontWeight : 'bold'}} ref={resultadoRef}></div>
    </div>
  )
}

export default Conversor
