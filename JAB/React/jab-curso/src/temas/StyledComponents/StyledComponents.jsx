import React from 'react'
import { Contenedor,Titulo,Moverse,Sombra } from './estilos'

const StyledComponents = () => {
    
  return (
    <div>
        <Contenedor>

        <Titulo color="red">Caja 1</Titulo>
        <Titulo redondo color="pink">Caja 2</Titulo>
        <Titulo redondo >Caja 3</Titulo>
        <Titulo></Titulo>
        </Contenedor>

        <Moverse distancia={333} segs={12}/>
        <Moverse distancia={111} segs={3}/>
        <Moverse distancia={222} segs={2}/>
        <Moverse distancia={50} segs={12}/>

        <Sombra></Sombra>
    </div>
  )
}

export default StyledComponents
