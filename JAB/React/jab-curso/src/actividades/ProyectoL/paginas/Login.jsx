import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Contexto'

const Login = () => {
    const {logearse,setReferencia} = useContext(Context)
    const navegacion = useNavigate()
    const login=()=>{
        logearse('user')
        navegacion('/',{replace:true})
    }
    const registro=(e)=>{
      setReferencia(e.currentTarget.value)
    }
  return (
    <div>
      
      <section className="login">
        <h1>Vive el pais:</h1>
        <label htmlFor="referencia">Referencia</label>
        <input type="text"  id='referencia' onChange={registro} placeholder='Referencia de tu billete' autoFocus autoComplete='off'/>
        <button className="botonRegistro" onClick={login}>Login</button>
      </section>
    </div>
  )
}

export default Login
