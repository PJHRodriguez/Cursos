import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {datos} from './data'
import {datos2} from './datos'
import Context from './context/Context'
import { useNavigate } from 'react-router-dom'

const ActividadM = () => {
  const {register,handleSubmit,formState:{errors}} = useForm();
  const navegacion=useNavigate()
  const {etapas,setEtapas,misDatos} = useContext(Context) 

  const obtener=(data)=>{
    console.table(data)
    const miZona = data.valor;
    const Datos= datos.find(d=>d.lugar === miZona);
    misDatos.push(Datos.imagen);
    misDatos.push(Datos.lugar);
    misDatos.push(Datos.precio);
    setEtapas(etapas+3);
    navegacion("/form")
    console.table(misDatos)
  }
  return (
    <div className='ActividadM'>
      <form onSubmit={handleSubmit(obtener)}>
        <nav>
          <span>{datos2[etapas].texto}</span>
          <input type="submit" value="Enviar" />
          {errors.valor?.type==="required" && <span className='aviso'>Selecciona una de las opciones</span>}
        </nav>
        <div className="formularioZonas">

        {
          datos.map(data=>
            <div className="zonas" key={data.lugar}>
              <div className="zona">
                  <input type="radio" name="listado" value={data.lugar} className='lugar' {...register('valor',{required:true})} />
                  <span className="poblacion">{data.lugar}</span>
                  <span className="precio">${data.precio}</span>
              </div>
                <img src={data.imagen} alt={data.lugar} />
            </div>
          )
        }

        </div>
      </form>
    </div>
  )
}

export default ActividadM
