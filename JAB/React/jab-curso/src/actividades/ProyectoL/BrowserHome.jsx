import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

const BrowserHome = () => {
  return (
    <BrowserRouter>
        <Home />
    </BrowserRouter>
  )
}

export default BrowserHome
