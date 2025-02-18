import React, { useState } from 'react'
import { valores } from './estilos'
import styled, { keyframes } from 'styled-components'
const ActividadO = () => {
    const[datos,setDatos]= useState(valores)

    const unColor=()=>{
        const colores=["gold","violet","orangered","navy","red","green"]
        return colores[Math.floor(Math.random()*colores.length)]
    }

    const agrandar=(altura,indice)=>{
        setDatos(
            datos.map((item,index)=>{
                if (index===indice){
                    return ({...item,altura:
                        (item.altura < 175 )
                        ?item.altura+40
                        :item.altura
                        ,
                        desde:item.altura
                        
                    })
                }else{
                    return ({...item,desde:item.altura});
                }
            })
        )
    }

    const animacion=(desde,valor)=>keyframes`
        from{
            height:${desde}px;
        }
        to{
            height:${valor}px;
        }
    `

    const Titulo = styled.div`
        font-size:3em;
        margin-bottom:30px;
        color:${unColor};
    `
    
    const Caja= styled.div`
        display:flex;
        position:relative;
        align-items:flex-end;
        width:300px;
        height:200px;
        border-bottom:3px solid black;
        border-left: 4px solid gray;
        padding:10px;
    `
    const Linea= styled.div`
        position:absolute;
        border-top: 1px dashed black;
        width: 300px;
        height: 1px;
        left: 15px;
        bottom: 186px;
    `
    const Barra = styled.div`
        width:50px;
        background-color:${(valor) => valor.color? valor.color : "silver"};
        margin-right:10px;
        animation: ${(valor) =>animacion(valor.desde,valor.altura)}  1s ease-in-out;
        animation-fill-mode:forwards;

    `

    
    
    
  return (
    <>
      <Titulo>Tus ganancias:</Titulo>
      <Caja>
        {
            datos.map((valor,indice) =>
                <Barra key={indice} color={valor.color} desde={valor.desde}
            altura={valor.altura} onClick={()=>agrandar(valor.altura,indice)}/>)
        }
        <Linea/>
      </Caja>
    </>
  )
}

export default ActividadO
