actividad()

function tema(){
    const CORRECTO="pablo"
    const OPCIONES = [
        {nombre:"pedro",saludo:"Hola"},
        {nombre:"maria",saludo:"Hi"},
        {nombre:"karla",saludo:"Buen dia"}
    ]

    document.querySelector(".boton").addEventListener("click",analizar)

    function analizar(){
        const NOMBRE = document.querySelector("#nombre").value.trim();
        //ternario(NOMBRE)
        //funcSwitch(NOMBRE)
        //comparacion(NOMBRE)
        //funcIf(NOMBRE)
        funcFind(NOMBRE)
    }

    function escribir(valor){
        document.querySelector(".caja2").innerHTML =`<div>${valor}</div>`
    }

    function ternario(nombre){
        //Operador ternario
        (nombre === CORRECTO)
        ? escribir("hola")
        : escribir("adios");
    }

    function funcSwitch(nombre){
        //switch
        switch(nombre){
            case "jorge":
                escribir("hola")
                break
            case "pedro":
                escribir("adios")
                break
            default:
                escribir("adios")
        }
    }

    function comparacion(nombre){
        //Expresion de comparacion
        (nombre === CORRECTO) && (escribir("Hola"));

    }

    function funcIf(nombre){
        //IF
        if(nombre === "jab"){
            escribir("hola")
        }else if(nombre ==="ana"){
            escribir("adios")
        }else{
            escribir("adios")
        }
    }

    function funcFind(nombre){
        //FIND
        const OBJETO = OPCIONES.find(dato => nombre === dato.nombre)
        if(OBJETO) escribir(OBJETO.saludo)
        else escribir("Adios")
    }
}

function actividad(){
    /* valores correctos:
    brendan eich (creador de JavaScript)
    Ha trabajado en las empresas: netscape y brave
    */
   // Si el nombre escrito por el usuario es "brendan", el apellido es "eich" y ha trabajado en "netscape" o en "brave": escribe "Hola" y sino "Adios".

    const NOMBRE="brendan";
    const APELLIDO="eich";
    const EMPRESA1="netscape";
    const EMPRESA2="brave";
    document.querySelector(".boton2").addEventListener("click",leer)

    function leer(){
        const nombre = document.querySelector("#nombre2").value
        const apellido = document.querySelector("#apellido").value
        const empresa = document.querySelector("#empresa").value

        if((nombre === NOMBRE && apellido === APELLIDO)&&(empresa === EMPRESA1 || empresa === EMPRESA2))  escribir("Hola")
        else escribir("Adios")

    }

    function escribir(valor){
        document.querySelector(".caja2").innerHTML=`${valor}`
    }



}