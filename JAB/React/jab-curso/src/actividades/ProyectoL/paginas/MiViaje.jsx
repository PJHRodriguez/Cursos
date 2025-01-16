import React, { useContext } from 'react'
import Context from '../context/Contexto'
import types from '../context/types'
import { Link } from 'react-router-dom'

const MiViaje = () => {
  const {contratacion,setSumaTotal,sumaTotal,dispatch2,referencia} = useContext(Context)
  return (
    <>
      <section className='ruta'>
        <h3>Lugares a visitar:</h3>
        {
          (contratacion.length<1) &&
          <div className="aviso">
          Todavia no has contratado ninguna actividad.<br/>
          Haz clic en {<Link to={'/cp'}>Capital y patagonia</Link>} 
          o  {<Link to={'/no'}>Norte y Este</Link>}  para ver nuestras ofertas
          </div>
        }
        {contratacion.map(mapa=>
          <div key={mapa.sitio}>
            {mapa.sitio} ({mapa.precio})
            <button className='boton anularRuta' onClick={
              ()=>{
                setSumaTotal(sumaTotal- mapa.precio)
                dispatch2({
                  type:types.anular,
                  payload:{nombre:mapa.sitio}
                })
              }
            }>anular</button>
          </div>
        )}
        <h3>Total a pagar : ${sumaTotal}</h3>
        <h3>Referencia: {referencia}</h3>
      </section>
    </>
  )
}

export default MiViaje
