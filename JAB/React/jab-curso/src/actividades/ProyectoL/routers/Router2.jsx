import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CP from '../paginas/CP'
import NO from '../paginas/NO'
import NavBar from '../navbar/NavBar'

import Comprar from '../paginas/Comprar'
import MiViaje from '../paginas/MiViaje'

const Router2 = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='cp' element={<CP/>}/>
            <Route path='no' element={<NO/>}/>
            <Route path='viaje' element={<MiViaje/>}/>
            <Route path='destino/:nombre' element={<Comprar/>}/>
            <Route path="/" ele ment={<Navigate to ="cp"/>}/>
        </Routes>
    </>
  )
}

export default Router2
