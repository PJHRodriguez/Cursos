import React from 'react'
import Router1 from './router/Router1'
import Provider from './context/Provider'

const RouterApp = () => {
  return (
    <div className='DoubleRouter'>
      <Provider>
        <Router1/>
      </Provider>
      
    </div>
  )
}

export default RouterApp
