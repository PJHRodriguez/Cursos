import React, { useState } from 'react'

const Componentes =()=>{

    const [contador,setContador] = useState(1)

    const incrementar=()=>{
        setContador(contador+1)
    }

    const decrementar=()=>{
        setContador(contador-1)
    }

    return(
        <div>

            <button onClick={decrementar}>-</button>
            <input type='text' value={contador} size="2" style={{textAlign : "center"}}/>
            <button onClick={incrementar}>+</button>

        </div>
    )
}

export default Componentes
