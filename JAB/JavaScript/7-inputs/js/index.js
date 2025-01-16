actividad1()
actividad2()

function tema(){
    /*
    substring(desde, hasta) -> obtiene un pedazo de un string
    toUpperCase() -> convierte a mayusculas todo el string
    toLowerCase() -> convierte a minisculas todo el string
    */
    let nombre
    document.querySelector(".boton").addEventListener("click",leer)
    document.querySelector("#campo").addEventListener("keydown",teclado)
    
    function teclado(e){
        (e.key=== "Enter") && (leer())
    }
    
    function leer(){
        nombre = document.querySelector("#campo").value.trim().toUpperCase();
        (nombre) &&
        (document.querySelector(".caja").innerHTML= `Hola ${nombre}`)
        limpiar()
    }
    
    function limpiar(){
        const ELEMENTO = document.querySelector("#campo")
        ELEMENTO.value=""
        ELEMENTO.focus()
    }

}

function actividad1(){
    /*
    substring(desde, hasta) -> obtiene un pedazo de un string
    toUpperCase() -> convierte a mayusculas todo el string
    toLowerCase() -> convierte a minisculas todo el string
    */

    let selectCreado = false
    document.querySelector(".boton").addEventListener("click",leer)
    const INPUT = document.querySelector("#campo")

    function leer(){
        const NOMBRE = INPUT.value.trim();
        (NOMBRE) && escribir(convertir(NOMBRE))
        limpiar()
    }
    
    function limpiar(){
        INPUT.value=""
        INPUT.focus()
    }

    function convertir(valor){
        let nombreCorrecto = `${valor.substring(0,1).toUpperCase()}${valor.substring(1).toLowerCase()}`
        return nombreCorrecto
    }

    function escribir(nombre){
        (!selectCreado) && (document.querySelector(".caja").innerHTML=`<select class="opciones"></select>`)
        selectCreado = true;
        (nombre) &&
        (document.querySelector(".opciones").innerHTML+=`<option >${nombre}</option>`)
    }

}


function actividad2(){
    let dto = parseInt(document.querySelector("select").value);
    document.querySelector("#precio").addEventListener("keyup",leer)
    document.querySelector("select").addEventListener("change",modificar)

    function modificar(){
        dto = parseInt(document.querySelector("select").value);
        leer()
    }
    function leer(){
        (document.querySelector("#precio").value)
        ? calcular()
        : vaciar()
    }
    function calcular(){
        let precio =Number(document.querySelector("#precio").value)
        let descuento = Number((precio* (dto/100)).toFixed(2));
        let total =  `${precio} - ${descuento} = ${Number((precio-descuento).toFixed(2))}`
        document.querySelector("#descuento").value = descuento;
        document.querySelector("#total").value = total;
    }

    function vaciar(){
        document.querySelector("#descuento").value = "";
        document.querySelector("#total").value = "";
    }
    
}
