import React from 'react'
import rey_sisebuto from '../reyes/rey_sisebuto.png'
import rey_leogivildo from '../reyes/rey_leogivildo.png'
import rey_atanagildo from '../reyes/rey_atanagildo.png'
import rey_incognito from '../reyes/rey_incognito.png'
function ActividadC() {

    const cambiarImagen=(e)=>{
        if(!e.target.src.includes("incognito")){
            e.target.src = rey_incognito
            e.target.parentNode.style.backgroundColor = "white"
        } 
        else if(e.target.src.includes("incognito")) e.target.style.visibility = "hidden"
        
    }

    const cambiarTexto=(e)=>{
        if(e.target.innerHTML.includes("Visto")) e.target.innerHTML = ""
        else e.target.innerHTML = "Visto"
    }
  const reyes=[
          {nombre:"Sisebuto",img:rey_sisebuto},
          {nombre:"Leogivildo",img:rey_leogivildo},
          {nombre:"Atanagildo",img:rey_atanagildo}
      ]
    return (
      <div className='ActividadUno'>
        <div>
          <img onClick={cambiarImagen}src={reyes[0].img} alt="Rey" />
          <p onClick={cambiarTexto}>{reyes[0].nombre}</p>
        </div>
  
        <div>
          <img onClick={cambiarImagen} src={reyes[1].img} alt="Rey" />
          <p onClick={cambiarTexto}>{reyes[1].nombre}</p>
        </div>
  
        <div>
          <img onClick={cambiarImagen} src={reyes[2].img} alt="Rey" />
          <p onClick={cambiarTexto}>{reyes[2].nombre}</p>
        </div>
      </div>
    );
}

export default ActividadC
