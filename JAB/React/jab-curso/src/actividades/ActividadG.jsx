import React from 'react'

function ActividadG() {
   
    const reyes=[
        {
            nombre:"Atanagildo",
            reinado:15,
            vacasComidas:9
        },{
            nombre:"Ervigio",
            reinado:7,
            vacasComidas:3
        },{
            nombre:"Ataúlfo",
            reinado:5,
            vacasComidas:16
        },{
            nombre:"Leovigildo",
            reinado:18,
            vacasComidas:3
        },{
            nombre:"Sisebuto",
            reinado:9,
            vacasComidas:13
        },{
            nombre:"Recesvinto",
            reinado:19,
            vacasComidas:11
        },{
            nombre:"Teodorico",
            reinado:33,
            vacasComidas:12
        }
      ]

    const actividad1 = reyes.map(valor=> 
            
        <div key={valor.nombre} className='rey'>
            <p><span style={{color:"red"}}>{valor.nombre.toUpperCase()}</span> ha comido {valor.vacasComidas * 365 * valor.reinado} vacas en sus {valor.reinado} años de reinado</p>
            <img src={`http://www.html6.es/img/rey_${valor.nombre.toLowerCase()}.png`} alt="Rey" />
        </div>
        )


    const eliminar=(e)=>{e.target.parentNode.remove()}
    const actividad2 = reyes.filter(valor=>!valor.nombre.includes("g")).map(valor=>
        <div key={valor.nombre}>
            {valor.nombre}
            <button onClick={eliminar}>Borrar</button>
        </div>
    )

    const actividad3 = reyes.find(valor => valor.nombre.substring(0,1).toLowerCase() == "e")  
    
    const incrementar=(e)=>{++e.target.innerHTML}
    const actividad4= reyes.filter(valor=>valor.vacasComidas > 10 && valor.reinado > 10).map(valor=>
        <div key={valor.nombre}>
            {valor.nombre}
            <div onClick={incrementar} className='numero'>
                0
            </div>
        </div>
    )
  return (
    <div className='ActividadG'>
      <h1>Actividad 1</h1>
      <div className='actividad'>
        {actividad1}
      </div>
        <h1>Actividad 2</h1>
      <div className="actividad">
        {actividad2}
      </div>
        <h1>Actividad 3</h1>
      <div className="actividad">
        {actividad3 == undefined ? "No se ha encontrado" : actividad3.nombre}
      </div>
        <h1>Actividad4</h1>
      <div className="actividad">
        {actividad4}
      </div>
    </div>
  )
}

export default ActividadG
