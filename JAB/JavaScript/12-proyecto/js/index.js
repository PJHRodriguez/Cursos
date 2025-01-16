// Código JavaScript
let DATOS = []
let idTitulo;
const NOMBRE = document.querySelector("#producto")
NOMBRE.addEventListener("keydown",teclado)
document.querySelector(".btinsertar").addEventListener("click",insertar)
document.querySelector(".bteditar").addEventListener("click",editar)
vaciar()
cargarTodos()

function teclado(e){
    let tecla = e.key
    if(tecla==="Enter")leer()
}

function leer(){
    const ESCRITO = NOMBRE.value.trim()
    if (ESCRITO){
        if(DATOS.length>0 && document.querySelector(".listainsertar").innerHTML===""){
            DATOS=[];
        }
        DATOS.push({"elNombre":ESCRITO,"estrellas":1})
        escribir(ESCRITO)
        vaciar()
    }
}

function vaciar(){
    NOMBRE.value=""
    NOMBRE.focus()
}

function escribir(valor){
    document.querySelector(".listainsertar").insertAdjacentHTML("beforeend",`
        <div class="linea" dato="${DATOS.length-1}">
            <div class="nombre">${valor}</div>
            <div class="estrellas">
                <img src="img/estrella.png" onclick="unaMas(this)">
            </div>
        </div>
        `)
}

function unaMas(e){
    let nEstrellas = e.parentNode.querySelectorAll("img").length;
    if(nEstrellas>=5){
        nEstrellas = 0;
        e.parentNode.innerHTML = `
            <img src="img/estrella.png" onclick="unaMas(this)">
        `;
    }

    let indice = e.parentNode.parentNode.getAttribute("dato");
    DATOS[indice].estrellas = ++nEstrellas;
    e.parentNode.insertAdjacentHTML("beforeend",`
        <img src="img/estrella.png" onclick="unaMas(this)"/>
    `)
}

function insertar(){

    const TITULO = document.querySelector("#titulo").value.trim();
    limpiar();
    fetch('php/insertar.php',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            aGuardar:DATOS,
            aTitulo: TITULO
        })
    })
    .then(()=>{
        cargarTodos();
    })


}


function cargarTodos(){
    document.querySelector(".listaCargar").innerHTML="";
    fetch('php/cargarTodos.php')
    .then(response=>response.json())
    .then(data=>{
        escribirLista(data);
    })
}


function escribirLista(registros){
    registros.map((valor,indice)=>{
        document.querySelector(".listaCargar").insertAdjacentHTML("beforeend",`
            <div class="bloque" idtitulo="${valor.id}" onclick="ver(this)">
                <strong>${JSON.parse(valor.titulo)}</strong>
                <div>(${valor.datos.length}valores)</div>
                <img src="img/papelera.png" onclick="eliminar(this,event)"/>
            </div>    
        `)
    })
}

function ver(e){
    idTitulo = e.getAttribute("idtitulo")
    fetch("php/cargarUno.php",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            id:idTitulo
        })
    })
    .then(a=>a.json())
    .then(data=>{
        DATOS=data.losValores;
        escribirTodo(data.elTitulo,data.losValores)
    })

}

function eliminar(e,event){
    event.stopPropagation();
    const id=e.parentNode.getAttribute("idtitulo");
    fetch("php/eliminar.php",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            id:id
        })
    })
    .then(()=>cargarTodos());
    limpiar();

}


function escribirTodo(titulo,valores){
    document.querySelector(".listaEditar").innerHTML="";
    document.querySelector("#tituloEditar").value=titulo;
    valores.map((valor,indice)=>{
        document.querySelector(".listaEditar").insertAdjacentHTML("beforeend",`
            <div class="linea" dato="${indice}">
                <div class="nombre">${valor.elNombre}</div>
                <div class="estrellas"></div>
            </div>`)

        for(let k=0;k<valor.estrellas;k++){
            document.querySelectorAll('.estrellas')[indice].insertAdjacentHTML("beforeend",`
                <img src="img/estrella.png" onclick="unaMas(this)"/>
            `)
        }
    })
}

function editar(){
    const TITULO= document.querySelector("#tituloEditar").value.trim();
    limpiar();
    fetch("php/editar.php",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            aEditar:idTitulo,
            aGuardar:DATOS,
            aTitulo:TITULO
        })
    })
    .then(()=>{
        cargarTodos();
    })
}

function limpiar(){
    
    document.querySelector(".listainsertar").innerHTML="";
    document.querySelector(".listaEditar").innerHTML="";
    document.querySelector("#tituloEditar").value="";
    document.querySelector("#productoEditar").value="";
    document.querySelector("#titulo").value="";
    document.querySelector("#producto").value="";
    document.querySelector("#titulo").focus();
}