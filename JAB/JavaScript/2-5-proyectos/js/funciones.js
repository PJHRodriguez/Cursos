actividad1()
function tema(){
    const MINOMBRE="Pablo";
    const IVA=0.16;
    let cantidad = 2;
    let precio = 4;

    //Evento al dar clic
    document.querySelector(".botonSaludar").addEventListener("click",saludar)

    escribir(calcularIVA(cantidad*precio))

    function saludar(){
        escribir(`Hola ${MINOMBRE}`)
    }

    function calcularIVA(resultado){
        return resultado * IVA;
    }

    function escribir(valor){
        document.querySelector(".resultado").innerHTML+=`<div>${valor}</div>`
    }
}





function actividad1(){
    let numero = 1
    document.querySelector(".resultado").innerHTML=`<button class="empezar">Empezar</button>`
    document.querySelector(".empezar").addEventListener("click",botones)


    function botones(){
        document.querySelector(".resultado").innerHTML=`<button class="aumentar">Aumentar</button><button class="reiniciar">Reiniciar</button>`
        document.querySelector(".contenedor").innerHTML=`<div class="numero">${numero}</div>`
        document.querySelector(".aumentar").addEventListener("click",aumentar)
        document.querySelector(".reiniciar").addEventListener("click",reiniciar)
    }

    function aumentar(){
        document.querySelector(".contenedor").innerHTML=`<div class="numero">${++numero}</div>`
    }
    function reiniciar(){
        numero=1
        document.querySelector(".contenedor").innerHTML=`<div class="numero">${numero}</div>`
    }
}


124885
131879  
131882
103840