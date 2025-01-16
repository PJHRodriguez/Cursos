import React from 'react'

function Map() {
    const reyes=[
        {
            nombre:"Atanagildo",
            reinado:15,
            vacasComidas:9
        },
        {
            nombre:"Ervigio",
            reinado:7,
            vacasComidas:3
        },
        {
            nombre:"Ataulfo",
            reinado:5,
            vacasComidas:16
        },
        {
            nombre:"Leogivildo",
            reinado:14,
            vacasComidas:3
        },
        {
            nombre:"Sisebuto",
            reinado:10,
            vacasComidas:13
        },
        {
            nombre:"Recesvinto",
            reinado:19,
            vacasComidas:11
        },
        {
            nombre:"Teodorico",
            reinado:33,
            vacasComidas:12
        }
    ]
    const resultado1 = reyes.filter(valor=>valor.vacasComidas >= 10 && valor.vacasComidas <=12).map(valor=>
        <div key={valor.nombre}>{valor.nombre} come {valor.vacasComidas} vacas al dia</div>
    )

    const resultado2= reyes.find(valor=>valor.vacasComidas >= 10)
    const resultado3 = reyes.find(valor=>valor.nombre.includes("a"))
  return (
    <div>
      {resultado1}
      {resultado2.nombre}
      <br />
      {resultado3.nombre}
    </div>
  )
}

export default Map
