import React from 'react'
import A from './paginasRouting/A'
import B from './paginasRouting/B'
import C from './paginasRouting/C'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Error404 from './paginasRouting/Error404'
import Nav from './Nav'
import D from './paginasRouting/D'

function Routing() {
  return (
    <div className="Routing">
        <BrowserRouter >
            <Nav/>
            <Routes>
                <Route path="/" element={<A/>}/>
                <Route path="/pagina2" element={<B/>}/>
                <Route path="/pagina3" element={<C/>}/>
                <Route path="/pagina4/:letra" element={<D/>}/>
                <Route path="/pagina1" element={<Navigate to ="/"/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing
