import React, { useState } from 'react'
import ComponentesHotel from './ComponentesHotel'

function PracticaHotel() { 
    const[dias,setDias] = useState(0)
    const[opcion,setOpcion] = useState("Hotel")
    const selectorHotelCoche =(e)=>{
        setOpcion(e.target.value)
    };
    return (
        <div className='container'>
            <select onChange={selectorHotelCoche} className='despegable'>
                <option value="Hotel">Hotel</option>
                <option value="Coche">Coche</option>
            </select>

            <input type="text" onChange={e=>setDias(e.target.value)} placeholder='Introduce el n° de dias' />

            {opcion==="Hotel" && <ComponentesHotel opcion={1} dias={dias}/>}
            {opcion==="Coche" && <ComponentesHotel opcion={2} dias={dias}/>}
        </div>
    )
}

export default PracticaHotel
