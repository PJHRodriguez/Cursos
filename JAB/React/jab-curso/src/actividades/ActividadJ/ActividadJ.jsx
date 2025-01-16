import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './paginas/Home'
import Rey from './paginas/Rey'
import Nav from './Nav'
import Error404 from './paginas/Error404'

function ActividadJ() {
  return (
    <div className='ActividadJ'> 
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/:rey" element={<Rey/>}/>
            <Route path="/leogivildo" element={<Navigate to="/leovigildo"/>}/>
            <Route path="/*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ActividadJ
