import React, { useRef } from 'react'
import rey_atanagildo from '../reyes/rey_atanagildo.png'
import rey_sisebuto from '../reyes/rey_sisebuto.png'

function Eventos() { 
  const conversion = 23.16;
  const refCaja = useRef();
  const incrementar =(e)=>{
    e.target.innerHTML=Number(e.target.innerHTML) +1;
  }
  const convertir =() =>{
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * conversion;
  }
  const cambio=(e)=>{
    e.target.src = rey_sisebuto
  }
  const lectura=(e)=>{
    refCaja.current.innerHTML = Number(e.target.value)
  }
  return (
    <div className='Eventos'>
    
        <div ref={refCaja} className='caja' onClick={incrementar}>1</div>
        <button onClick={convertir}>Cambiar a peso MXN</button>
        <div><img onClick={cambio} src={rey_atanagildo}/></div>
        <input onChange={lectura} className='campo'/>
    </div>
  )
}

export default Eventos
