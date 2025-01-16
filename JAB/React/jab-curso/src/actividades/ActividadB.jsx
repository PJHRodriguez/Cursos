import React, { useRef } from 'react'
import rey_atanagildo from '../reyes/rey_atanagildo.png'
import rey_sisebuto from '../reyes/rey_sisebuto.png'

function ActividadB() {
  const conversion = 23.16;
    const refCaja = useRef();
    const incrementar =(e)=>{
        e.target.innerHTML=Number(e.target.innerHTML) +1;
        if(e.target.innerHTML >= 10)     e.target.innerHTML = 1;
        if(e.target.innerHTML >7) e.target.style.backgroundColor = "red"
        else e.target.style.backgroundColor = "white"
      
    }
    const convertir =() =>{
      refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * conversion;
    }
    const cambio=(e)=>{
      if (e.target.src.includes("rey_atanagildo"))  e.target.src = rey_sisebuto
      else  e.target.src = rey_atanagildo
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

export default ActividadB
