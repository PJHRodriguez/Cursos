import React from 'react'
import { useForm } from 'react-hook-form'
import { validador } from './validador';

const Forms = () => {

    const {register,handleSubmit,watch,setFocus,resetField, formState:{errors}} = useForm();
    const obtenerValores=(data)=>{
        console.table(data)

        resetField('telefono')
        setFocus('telefono')
    }
  return (
    <>
      <div className="forms">

      <form onSubmit={handleSubmit(obtenerValores)} action="">

        <div className="pregunta">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id='nombre' placeholder='Ingresa tu nombre' autoFocus
        {...register('nombre',
            {
                required:true,
                maxLength:15
            }
        )}/>
        </div>
        {errors.nombre?.type === 'required' && 
            <div className='aviso'>El nombre de usuarios es obligatorio</div>
        }
        {errors.nombre?.type === 'maxLength' && 
            <div className='aviso'>Maximo 15 caracteres</div>
        }

        <div className="pregunta">
        <label htmlFor="edad">Edad:</label>
        <input type="number" id='edad' placeholder='Ingresa tu edad' 
        {...register('edad',
            {
                min:0,
                max:120
            }
        )}/>
        </div>
        {errors.edad?.type === 'min' && 
            <div className='aviso'>El valor minimo es 0</div>
        }
        {errors.edad?.type === 'max' && 
            <div className='aviso'>El valor maximo es 120</div>
        }

        <div className="pregunta">
        <label htmlFor="email">E-mail:</label>
        <input type="text" id='email' placeholder='Ingresa tu email' 
        {...register('email',
            {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            }
        )}/>
        </div>
        {errors.email?.type === 'pattern' && 
            <div className='aviso'>El correo electronico no es valido.</div>
        }

        <div className="pregunta">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="number" id='telefono' placeholder='Ingresa tu telefono' 
        {...register('telefono',
            {
                validate:validador
            }
        )}/>
        </div>
        {errors.telefono?.type === 'validate' && 
            <div className='aviso'>El telefon debe de iniciar con 33 o 52.</div>
        }

        <div className="">
        <input type="submit"/>
        </div>
        <div>
            {watch('nombre') &&
            <div className='resumen'>
                Tu nombre es <strong>{watch('nombre')}</strong>

            {watch('edad')&& <span> y tienes <strong>{watch('edad')}</strong> años </span>}
            </div>
            }
        </div>
      </form>
    </div>
    </>
  )
}

export default Forms
