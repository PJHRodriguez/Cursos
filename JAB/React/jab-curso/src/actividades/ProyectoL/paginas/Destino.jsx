import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../context/Contexto';

const Destino = ({nombre,imagen,situacion}) => {
    const ruta = `/img/${imagen}`;
    const {contratacion} = useContext(Context)
    const encontrado = contratacion.find(objeto => objeto.sitio === nombre)
  return (
    <>
        <div className="destino">
            <div className='nombre'>{nombre}</div>
            <div className='situacion'>{situacion}</div>
            <img src={ruta} alt="Imagen de la zona" />
            <div className="flex">
              <Link to ={`/destino/${nombre}`}>Mas info</Link>
              {(encontrado) && <div className="circulo"></div>}
            </div>
        </div>
    </>
  )
}

export default Destino
