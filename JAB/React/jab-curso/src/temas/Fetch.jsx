import React, { useEffect, useState } from 'react'

function Fetch() {
    const [datos,setDatos] =useState([])

    useEffect(()=>{
        const url ="https://randomuser.me/api/?results=3"
        const peticion = fetch(url)
        peticion
        .then(datos=>datos.json())
        .then(lectura=>{
            lectura.results.map((persona)=>{
                setDatos((e)=>
                    [...e,<div key={persona.email}>
                        <div>{persona.name.first} {persona.name.last}</div>
                        <div>
                            <img src={persona.picture.large} alt="Foto" />
                        </div>
                    </div>]
                )
            })

        })
        .catch(()=>console.log("Se ha producido un error"))
    },[])
    
    return (
        <div>
            <h1>Premiados:</h1>
            {datos}
        </div>
    )
}

export default Fetch
