import React from 'react'
import Router from './routers/Router'
import Provider from './context/Provider'

const Home = () => {
  return (
    <div className='ActividadL'>
        <Provider>
            <Router/>
        </Provider>
    </div>
  )
}

export default Home
