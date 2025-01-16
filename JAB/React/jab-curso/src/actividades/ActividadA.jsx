import React from 'react'
import rey_sisebuto from '../reyes/rey_sisebuto.png'
import rey_leogivildo from '../reyes/rey_leogivildo.png'
import rey_atanagildo from '../reyes/rey_atanagildo.png'

function ActividadA() {
    const reyes=[
        {nombre:"Sisebuto",img:rey_sisebuto},
        {nombre:"Leogivildo",img:rey_leogivildo},
        {nombre:"Atanagildo",img:rey_atanagildo}
    ]
  return (
    <div className='ActividadUno'>
      <div>
        <img src={reyes[0].img} alt="Rey" />
        <p>{reyes[0].nombre}</p>
      </div>

      <div>
        <img src={reyes[1].img} alt="Rey" />
        <p>{reyes[1].nombre}</p>
      </div>

      <div>
        <img src={reyes[2].img} alt="Rey" />
        <p>{reyes[2].nombre}</p>
      </div>
    </div>
  )
}

export default ActividadA
