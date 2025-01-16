import { useState } from "react"
import Context from "./Context";


const Provider=({children})=>{
    const [misDatos,setMisDatos] =useState([])
    const [etapas,setEtapas] = useState(0);
    return(
        <Context.Provider value={{
            etapas,
            setEtapas,
            misDatos,
            setMisDatos
        }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;