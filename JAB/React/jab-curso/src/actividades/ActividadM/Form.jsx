import React, { useContext } from 'react'
import { datos2 } from './datos'
import Context from './context/Context'
import { useForm } from 'react-hook-form'
import Resumen from './Resumen'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navegacion = useNavigate()
    const {register,handleSubmit,formState:{errors},setFocus,reset,watch}= useForm();
    const{etapas,setEtapas,misDatos,setMisDatos} = useContext(Context);
    const obtener=(data)=>{
        console.table(data)
        misDatos[etapas]=data.valor;
        setEtapas(etapas+1)
        setFocus("valor")
        reset();
    }

    const imprimir=()=>{
        window.print()
    }
    const volver=()=>{
        setEtapas(0)
        setMisDatos([])
        navegacion("/home")
    }
  return (
    <>
    <div className="ActividadM">
        <section className="seccion">

            {etapas>6  
            ?
                <div className='opciones'>
                    <h2>Quieres modificar los datos o finalizar e imprimir tu pedido?</h2>
                    <button className="volver" onClick={volver}>Volver</button>
                    <button className="imprimir" onClick={imprimir}>Imprimir</button>
                </div>
            :
            
            <form onSubmit={handleSubmit(obtener)}>

                <h2>
                    {datos2[etapas].texto }
                    <span className="verde">
                        {watch('valor')}
                        {watch('valor.length')> 0 &&
                        <span>
                            {datos2[etapas].sufijo} 
                        </span>
                        }
                    </span>
                </h2>
                <input type="text" autoFocus autoComplete='off' {
                    ...register('valor',{
                        required: datos2[etapas].obligatorio,
                        min: datos2[etapas].minimo,
                        max: datos2[etapas].maximo
                    })}/>
                    {errors.valor?.type==="required" && <p>Este dato es obligatorio</p>}
                    {errors.valor?.type==="max" && <p>Lo ingresado es muy corto(como minimo deberia ser {datos2[etapas].minimo})</p>}
                    {errors.valor?.type==="min" && <p>Lo ingresado es muy largo(como maximo deberia ser {datos2[etapas].maximo})</p>}

                <hr />
                <input type="submit" value="Enviar" />
            </form>
            }
            <Resumen/>
        </section>
        </div>
    </>
  )
}

export default Form
