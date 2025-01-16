import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const  reyes= [
    {nombre : "atanagildo"},
    {nombre : "ataulfo"},
    {nombre : "ervigio"},
    {nombre : "leogivildo"},
    {nombre : "recesvinto"},
    {nombre : "sisebuto"},
    {nombre : "teodorico"}
]
  const divReyes = reyes.map((rey,index)=>
    <div key={index}><Link to={`/${rey.nombre}`}><img src={`https://www.html6.es/img/rey_${rey.nombre}.png`} alt="Foto del rey" /></Link></div>            
)
  return (
    <>
      <div className='reyes'>
      {divReyes}

      </div>
    </>
  )
}

export default Home
