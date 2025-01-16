import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto';

const Login = () => {
  const {logearme} = useContext(Contexto)
  const navegacion = useNavigate();
  const login =()=>{
    navegacion('/',{replace:true})
    logearme('pablo')
  }
  return (
    <div>
      <h1>Pantalla de login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
