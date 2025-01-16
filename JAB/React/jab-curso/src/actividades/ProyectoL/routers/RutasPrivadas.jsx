import React, { useContext } from 'react'
import Context from '../context/Contexto'
import { Navigate } from 'react-router-dom'

const RutasPrivadas = ({children}) => {
  const {logeado} = useContext(Context)
  return (logeado)
  ? children
  : <Navigate to="/login"/>
}

export default RutasPrivadas
