import { useState } from "react"
import Contexto from "./Contexto"

const Provider = ({children}) => {
    const [laCorrecta,setCorrecta]= useState("")
    const escribirCorrecta=(aGuadar="")=>{
        setCorrecta(aGuadar)
    }
  return (
    <div>
      <Contexto.Provider value={{
        escribirCorrecta,
        laCorrecta

      }}>
        {children}
      </Contexto.Provider>
    </div>
  )
}

export default Provider
