
actividad2()

function tema(){
    /*
    keydown->Detecta todas las teclas
    keyup->Detecta todas las teclas
    keypress -> Detecta la tecla  presionadas (toma en cuenta si es minuscula o mayuscula)
    */


document.querySelector(".campo").addEventListener("keydown",teclado)
document.querySelector(".campo").addEventListener("keyup",teclado)


function teclado(e){
    (e.key === "Enter") 
    && (e.type==="keydown")
    ? document.querySelector(".campo").style.backgroundColor ="red"
    : document.querySelector(".campo").style.backgroundColor =null
}
}

/*


-Para MOVER la nave
document.querySelector(".nave").style.bottom="__px";

-Para poder SUSTITUIR una imagen por otra
document.querySelector(".nave").src="img/nave2.png";
*/

function actividad1(){
    let despegue = 0
    let empezar = false;
    const NAVE =document.querySelector(".nave")
    window.addEventListener("keydown",despegar)
    window.addEventListener("keyup",despegar)
    function despegar(e){
        (e.key === "Enter") &&
        (e.type==="keydown") 
        ? inicio()
        : NAVE.src="img/nave1.png";
        (e.key ==="ArrowUp" && empezar) && 
        (document.querySelector(".nave").style.bottom=`${despegue+=10}px`) 
    }
    function inicio(){
        NAVE.src="img/nave2.png"
        empezar= true
    }
}

function actividad2(){
    window.addEventListener("keypress",teclasPulsadas)
    let teclas = 0
    contador = document.querySelector("body")
    contador.innerHTML = `<div>${teclas} teclas pulsadas</div>`
    
    function teclasPulsadas(e){
        const LETRA = e.key;
        (LETRA === "," || LETRA === ".")
        ? LETRA.preventDefault()
        : (++teclas === 1 )
        ? contador.innerHTML = `<div>${teclas} tecla pulsada</div> <div>${LETRA}</div>`
        :contador.innerHTML = `<div>${teclas} teclas pulsadas</div> <div>${LETRA}</div>`
    }
}

/*


-Para MOVER la nave
document.querySelector(".nave").style.bottom="__px";

-Para poder SUSTITUIR una imagen por otra
document.querySelector(".nave").src="img/nave2.png";
*/