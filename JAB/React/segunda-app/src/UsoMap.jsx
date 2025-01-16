import React from 'react'

function UsoMap() {

  const miArray =()=>{
    const numerosArray = [
        {id:1,numero:15},
        {id:2,numero:37},
        {id:3,numero:26},
        {id:4,numero:95},
        {id:5,numero:81}
    ]

    return(
        <p>{numerosArray.map((item)=>{
            return <span key={item.id}>&nbsp;{item.numero}</span>
        })}</p>
    )
  }  

  return (
    <div>
        <h1>Numeros del array</h1>
        {miArray()}
    </div>
  )
}

export default UsoMap
