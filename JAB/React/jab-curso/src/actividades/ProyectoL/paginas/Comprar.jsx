import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import data from '../datos/data';
import types from '../context/types';
import Context from '../context/Contexto';

const Comprar = () => {
    const {nombre} = useParams();
    const destinoEncontrado = data.find(dato => dato.nombre === nombre)
    const navegacion = useNavigate();
    const {dispatch2,setSumaTotal,sumaTotal,contratacion} = useContext(Context)
    const encontrado = contratacion.find(objeto=>objeto.sitio === nombre)
    const volver=()=>{
        navegacion(-1)
    }
    if (!destinoEncontrado){
        return <Navigate to ="/no"/>
    }

    const contratar=()=>{
        setSumaTotal(sumaTotal+destinoEncontrado.precio)
        const action = {
            type: types.contratar,
            payload: {nombre:nombre,precio:destinoEncontrado.precio}
        }
        dispatch2(action)
    }

    const anular=()=>{
        setSumaTotal(sumaTotal-destinoEncontrado.precio)
        const action = {
            type: types.anular,
            payload: {nombre:nombre}
        }
        dispatch2(action)
        
    }
    const imagen=`/img/${destinoEncontrado.imagen}`
    return(

        <>
        <h1>{nombre}</h1>
        <div className="servicios">{destinoEncontrado.servicio }</div>
        <div className="imagenGrande">
            <div className="precio">${destinoEncontrado.precio}</div>
            {(!encontrado) &&<button className='boton contratar' onClick={contratar}>Contratar</button>}
            {(encontrado) && <button className='boton anular' onClick={anular}>Anular</button>}
            <button  className="botonVolver" onClick={volver}>Volver</button>
            <img src={imagen} alt="Foto de la zona" />
        </div>
        
        </>
    )
  
}

export default Comprar
