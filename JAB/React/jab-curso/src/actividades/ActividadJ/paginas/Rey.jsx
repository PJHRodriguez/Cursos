import React from 'react'
import { useParams } from 'react-router-dom'

function Rey() {
  const dato = useParams()
  const image = `https://www.html6.es/img/rey_${dato.rey}.png`
  return (
    <div className='rey'>
      <img src={image} alt="Foto del rey" />
      <div>
        {dato.rey}
      </div>
    </div>
  )
}

export default Rey
