import React, { useEffect, useRef, useState } from 'react'

function ConversorMejorado() {

    const[valorCambio,setValorCambio] = useState(null)

    const eurosRef= useRef(null)
    const resultadoRef = useRef(null)

    useEffect(()=>{

        const llamaApiCambio= async()=>{
            try{
                const respuesta = await fetch("https://v6.exchangerate-api.com/v6/b2e012ddc41919a48295dda5/latest/EUR");
                
                const datos = await respuesta.json();

                console.log(datos)

                setValorCambio(datos.conversion_rates.USD)

            }catch(error){
                console.error("Error al acceder a la API ->", error);
            }
        };

        llamaApiCambio()
    },[])
  
    const calcular=()=>{
          
        const eurosValor = parseFloat(eurosRef.current.value)
        const dolares = eurosValor* valorCambio
  
        resultadoRef.current.innerHTML = dolares.toFixed(2) + " $ ";
  
    }
      
  return (
    <div className='conversor'>
    <h1>Conversor Euro-Dolar</h1>
    <input type="text" ref={eurosRef} />
    <button onClick={calcular}>Convertir</button>
    <div style={{fontSize : "1.5em", fontWeight : 'bold'}} ref={resultadoRef}></div>
  </div>
  )
} 

export default ConversorMejorado
