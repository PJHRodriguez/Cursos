import React, { useContext } from 'react'
import Context from '../context/Contexto'
import { Navigate } from 'react-router-dom'

const RutasPublicas = ({children}) => {
    const {logeado} = useContext(Context)
  return (logeado)
  ? <Navigate to ="/"/>
  : children
}

export default RutasPublicas
