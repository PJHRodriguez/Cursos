tema()
actividad1()


function tema(){
    /*
    Number() -> Pasa el valor a numerico
    parseFloat() -> Pasa el valor a decimal
    ___.toFixed(cantidad) -> Recorta los decimales a la cantidad que desees 
    */

    const RESULTADO = 1.1 * 1.1;
    let correcto = Number(RESULTADO.toFixed(2))

    console.log(RESULTADO)
}

function actividad1(){
    const INPUTN1 = document.querySelector("#n1")
    const INPUTN2 =document.querySelector("#n2")
    INPUTN1.addEventListener("keyup",leer)
    INPUTN2.addEventListener("keyup",leer)
    

    function leer(e){
        
        (e.key==="Enter")
        && (convertir())
        
    }

    function convertir(){
        const N1 = Number(INPUTN1.value.trim())
        const N2 = Number(INPUTN2.value.trim());

        (N1 && N2)
        ?calcular(N1,N2)
        :vaciar()
    }

    function calcular(valor1,valor2){
        vaciar();
        escribir(`<h2>${valor1} x ${valor2}</h2>`)
        escribir(`<strong>Calculo original</strong> : ${valor1*valor2}`)
        escribir(`<strong>Multiplicacion correcta</strong> : ${Number((valor1*valor2).toFixed(2))}`)
        escribir(`<strong>Resta correcta</strong> : ${Number((valor1-valor2).toFixed(2))}`)
        escribir(`<strong>Division correcta</strong> : ${Number((valor1/valor2).toFixed(2))}`)
        escribir(`<strong>Suma correcta</strong> : ${Number((valor1+valor2).toFixed(2))}`)

        
   }

   function escribir(valor){
        reiniciar()
        document.querySelector(".resultado").innerHTML +=`
        <div>
            ${valor}
        </div> `
   }

   function reiniciar(){
        INPUTN1.value = ""
        INPUTN2.value ="1.1"
        INPUTN1.focus()
   }
    function vaciar(){
        document.querySelector(".resultado").innerHTML =""
    }
    
}