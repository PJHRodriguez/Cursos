import React, { useState } from 'react';
import './App.css';
import SegundaApp from './segundaApp';
import EjecutarVideo from './EjecutarVideo';
import Conversor from './Conversor';
import ConversorMejorado from './ConversorMejorado';
import UsoMap from './UsoMap';
import Componentes from './Componentes';
import PropsComponentes from './PropsComponentes';
import PropTypes from "prop-types";
import PracticaHotel from './PracticaHotel';
import { MiBoton } from './StyledComponents';
import {MiBotonLargo} from './Styled2Components'
import Aplicacion from './Aplicacion';
import GaleriaBasica from './GaleriaBasica';

function App() {
  //PropsCompoents
  const usuario = {
    nombre: "Jorge",
    apellido : "Diaz",
    edad: 20,
    genero: "Masculino"
  }
  

  return (
    <>
      {/*<SegundaApp/>*/}
      {/*<GaleriaBasica/>*}
      {/*<EjecutarVideo/>*/}
      {/*<Conversor/>*/}
      {/*<ConversorMejorado/>*/}
      {/*<UsoMap/>*/}
      {/*<Componentes/>*/}
      {/*<PropsComponentes usuario = {usuario}/>*/}
      {/*<PracticaHotel/>*/}
      {/*<MiBoton entrar={true}>Entrar</MiBoton>*/}
      {/*<MiBotonLargo>Salir</MiBotonLargo>*/}
      <Aplicacion/>
    </>
  );
}

/*PropsComponets*/ 
PropsComponentes.propTypes={
  usuario:PropTypes.shape(
    {
      nombre:PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired
    }
  ).isRequired
}
export default App;
