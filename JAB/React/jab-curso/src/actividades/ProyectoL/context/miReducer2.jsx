import React from 'react'
import types from './types';

const miReducer2= (state=[],action) => {
    switch(action.type){
        case types.contratar:    
            return[
                ...state,
                {
                    sitio:action.payload.nombre,
                    precio: action.payload.precio
                }
            ]
        case types.anular:
            return(
                state.filter(dato=> dato.sitio!==action.payload.nombre)
            )
        default:
            return state;
    }
}

export default miReducer2
