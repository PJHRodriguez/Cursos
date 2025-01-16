import React from 'react'
import Idiomas from './Idiomas'
import Pagina from './Pagina'
import Provider from './contexto/Provider'

function ActividadI() {
  return (
    <Provider>

      <div className='ActividadI'>
        <div className='banderas'>
          <Idiomas/>
        </div>
        <div className='contenido'>
          <Pagina/>
        </div>
        
      </div>
    </Provider>
  )
}

export default ActividadI
