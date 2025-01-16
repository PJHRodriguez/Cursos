//Operadores y expresiones
/*
asignacion -> = -= += *= /=
aritmeticos -> + - * / % ++ --
comparacion -> == === >= <= != !===
negacion -> !
ternarios -> () ? :
logicos->  &&(AND) ||(OR)

*/

actividad2();

function tema(){
    let caja=document.querySelector(".contenedor");
    let numero1=6;
    let numero2=3;
    let numero3 = "3"
    let nombre = "usuario";
    let edad = 20;

    //dibujar(resultado++)
    //dibujar(++resultado)

    //=== Compara si es igual el valor y el tipo de variable
    //let resultado = numero1===numero3;
    //dibujar(resultado)

    //Operador ternario 
    (nombre === "usuario" || edad >= 18)
    ? dibujar("Soy usuario")
    : dibujar("No soy usuario")


    function dibujar(dato){
        caja.innerHTML+=`<div>${dato}</div>`
    }
}



function actividad1(){
/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")

A mostrar en el <div class="nota">
De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/

/* Usar sólo TERNARIOS
(...) ? :
*/

let nota=10;
(nota<0 || nota>10) 
? aprobo("No te flipes")
: (nota<5)
? aprobo("Suspendido")
: (nota>=5 && nota < 7)
? aprobo("Aprobado")
: (nota>=7 && nota < 9)
? aprobo("Notable")
: aprobo("Excelente")

function aprobo(dato){
    document.querySelector(".resultado").innerHTML= 
    (nota>=5 && nota<=10)
    ?
    `<div class="aprobado">¡¡Has APROBADO!!</div>`
    :
    `<div class="suspendido">Has suspendido</div>`
    document.querySelector(".nota").innerHTML= dato;
}

}

function actividad2(){
    // Escribe aquí tus datos correctos
    const NOMBRE_CORRECTO="pablo";
    const ALIAS_CORRECTO="soypablo"
    const PIN_CORRECTO=12;
    const PASSWORD_CORRECTO="1234";

    /* Estos son los datos del usuario
    (modifícalos para comprobar que todo funciona correctamente)*/

    const NOMBRE="soypablo";
    const PIN=0;
    const PASSWORD="1234";

    /*
    Si el usuario ha escrito el mismo valor  en NOMBRE, PIN y PASSWORD (pero no ha dejado ninguno vacío): es "Bien"
    o bien 
    Si el NOMBRE es igual al NOMBRE_CORRECTO o al ALIAS_CORRECTO
    y además de eso
    el PIN es igual al PIN_CORRECTO
    o bien
    el PASSWORD es igual al PASSWORD_CORRECTO (cualquiera de las 2)
    Entonces se muestra: "Bien" (color "green")
    En el resto de casos: "Mal" (color "red")
    */


    ((NOMBRE==PIN && PIN==PASSWORD && NOMBRE!="") || 
    (NOMBRE === NOMBRE_CORRECTO || NOMBRE === ALIAS_CORRECTO) && PASSWORD === PASSWORD_CORRECTO || PIN === PIN_CORRECTO)
    ? dibujar(`<div class="bien">Bien</div>`)
    : dibujar(`<div class="mal">Mal</div>`)


    function dibujar(valor){
    document.querySelector(".resultado").innerHTML=valor;
    }
}