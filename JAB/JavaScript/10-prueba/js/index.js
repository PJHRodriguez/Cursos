/*
Dólares USA - 1.06
Libras esterlinas - 0.87
Pesos argentinos - 370.22
Pesos colombianos - 4510.51
Pesos mexicanos - 19.33
*/
const SELECT = document.querySelector("select")
const EUROS = document.querySelector("#euros")
const DIVISAS =document.querySelector("#divisa")
const CAMBIO =document.querySelector("#cambio")
const DONAR = document.querySelector("#donar")
let monedaUsada,valorDonado;
SELECT.addEventListener("change",cambiarMoneda)
EUROS.addEventListener("keyup",cambiarEuros)
DIVISAS.addEventListener("keyup",cambiarDivisas)
DONAR.addEventListener("click",donacion)
const CAMBIOS=[
    {moneda:"Dólares USA",elCambio:1.06},
    {moneda:"Libras esterlinas",elCambio:0.87},
    {moneda:"Pesos argentinos",elCambio:370.22},
    {moneda:"Pesos colombianos",elCambio:4510.51},
    {moneda:"Pesos mexicanos",elCambio:19.33},
]

CAMBIOS.map(dato =>
    SELECT.insertAdjacentHTML("beforeend",`<option>${dato.moneda}</option>`)
)
cambiarMoneda()

function cambiarMoneda(){
    let moneda = SELECT.value
    monedaUsada = CAMBIOS.filter(dato => dato.moneda == moneda)
    CAMBIO.innerHTML =`$1 Euro es $${monedaUsada[0].elCambio} en ${monedaUsada[0].moneda}` 
}


function cambiarEuros(){
    (EUROS) &&
    (DIVISAS.value = Number((EUROS.value*monedaUsada[0].elCambio).toFixed(2)))
}

function cambiarDivisas(){
    (DIVISAS) &&
    (EUROS.value = Number((DIVISAS.value/monedaUsada[0].elCambio).toFixed(2)))
}

function donacion(){
    valorDonado = Number(document.querySelector("#donacion").value);
    (EUROS) &&
    (document.querySelector("#donacion").value = Number(((EUROS.value * 0.05)+valorDonado).toFixed(2)))
    limpiar()
}


function limpiar(){
    DIVISAS.value=""
    EUROS.value=""
    EUROS.focus()
}