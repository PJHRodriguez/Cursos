import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ActividadM from './ActividadM'
import Form from './Form'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<ActividadM/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/' element={<ActividadM/>}/>
      </Routes>
    </>
  )
}

export default Router
