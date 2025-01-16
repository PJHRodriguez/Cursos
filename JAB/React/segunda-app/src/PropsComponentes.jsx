import React from 'react'

function PropsComponentes(props) {
  const {nombre,apellido,edad,genero} = props.usuario
  return ( 
    <div>
      {nombre && apellido ? 
        (<div>
            <h1>Hola {props.usuario.nombre} {props.usuario.apellido}</h1>
            <p>Tienes <strong>{props.usuario.edad}</strong> años y tu genero es <strong>{props.usuario.genero}</strong></p>
        </div>)
        :
        <p>Inicia sesion</p>
    
      } {/*Solo se muestra lo que este adentro del paretensis si se cumple la condicion*/ }
      
    </div>
  )
}

export default PropsComponentes


