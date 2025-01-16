import React from 'react'

//function Componentes({rey,reses=0}){
function Componentes(prop) {
  
  return (
    <div>
      <h1>Hola {prop.rey} come {prop.reses} vacas</h1>
    </div>
  )
}

Componentes.defaultProps={
    reses: "pocas",
    rey : "Rey anonimo"
}

export default Componentes

