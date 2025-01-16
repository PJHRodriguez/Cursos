// Escribe aquí el código Javascript
let albumes=[];
let desplegado;
document.querySelector(".mas").addEventListener("click",mas);
document.querySelector(".ampliacion").addEventListener("click",cerrar);
document.querySelector("#album").addEventListener("keydown",teclado);
cargarTodos();

function teclado(e){
    (e.key==="Enter") && mas();
}
function mas(){
    const NOMBRE = document.querySelector("#album").value.trim();
    if (NOMBRE){
        albumes.push({album:NOMBRE,imagenes:[]});
        escribir();
    }
    limpiar()
}

function escribir(){
    document.querySelector(".albumes").innerHTML=""
    albumes.map((valor,indice)=>{
        document.querySelector(".albumes").insertAdjacentHTML("beforeend",`
            <div class="cadaAlbum" onclick="desplegar(this)" idalbum="${indice}">
                <div class="nombreAlbum"
                contenteditable="true"
                onfocus="activar(this)"
                onblur="desactivar(this)"
                onkeydown="detectarEnter(this,event)">
                    ${valor.album}
                </div>
                <img src="img/papelera.png" onclick="eliminarAlbum(this,event)">
                <div class="numeroImagenes">(${valor.imagenes.length} imagenes)</div>
            </div>    
        `)
    })
    insertar();
}

function activar(e){
    e.style.color="red"
}

function desactivar(e){
    e.style.color=null;
    const CONTENIDO=e.innerHTML.trim();
    const INDICE= encontrar2(e);
    albumes[INDICE].album=CONTENIDO;
    insertar();
}

function detectarEnter(e,event){
    const TECLA = event.key;
    if(TECLA==="Enter"){
        desactivar(e);
        event.preventDefault();
    }
}

function limpiar(){
    document.querySelector("#album").value="";
    document.querySelector("#album").focus();
}

function desplegar(e){
    document.querySelector(".miAlbum").style.display="block";
    desplegado=(e.getAttribute("idalbum"));
    const DATOS=albumes[desplegado];
    document.querySelector(".miAlbum").innerHTML=`
        <h1>${DATOS.album}</h1>
        <div class="imagenes"></div>
        <div class="caja">
            <input type="file" name="fichero" id="fichero" accept="image/*">
            <button id="enviar" onclick="enviar()">Subir imagen</button>
        </div>`
    if(DATOS.imagenes.length> 0){
        DATOS.imagenes.map((valor)=>{
            codigoHTML(valor);
        })
    }
    
}
function enviar(){
    console.log("a")
    if(fichero.files.length>0){
        let data = new FormData();
        data.append('fichero',fichero.files[0]);
        fetch('php/subir.php',{
            method:"POST",
            body:data
        })
        .then(response=>response.text())
        .then(data => {
            albumes[desplegado].imagenes.push(data.trim());
            codigoHTML(data);
            escribir();
        })

    }
}


function codigoHTML(dato){
    document.querySelector(".imagenes").insertAdjacentHTML("beforeend",`
        <div class="imagen"
            onmouseover="mostrar(this)"
            onmouseout="mostrar(this)"
            onclick="ampliar('${dato}')" alt=""/>

            <img src="${dato}" alt=""/>
            <img class="papelera" src="img/papelera.png" onclick="eliminarImagen(this,'${dato}',event)"/>
        </div>    
    `)
}


function mostrar(e){
    if(e.querySelector(".papelera").style.display ==="block"){
        e.querySelector(".papelera").style.display ="none"
    }else{
        e.querySelector(".papelera").style.display ="block"
    }
}

function ampliar(e){
    document.querySelector(".ampliacion").style.display="block";
    document.querySelector(".imagenGrande").innerHTML=`<img src="${e}"/>`;

}

function cerrar(){
    this.style.display="none";
}

function eliminarImagen(e,miImagen,event){
    event.stopPropagation();
    e.parentNode.remove();
    const indice= encontrar(e)
    albumes[desplegado].imagenes.splice(indice,1)
    fetch('php/borrarFichero.php',{
        method:"POST",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `ficheroABorrar=${encodeURIComponent(miImagen)}`,
    })
    .then(response=>response.text())
    .then(data=>console.log(data));
    escribir();
}

function encontrar(e){
    const HIJOS = e.parentNode.children;
    for(let k = 0;k<HIJOS.length;k++){
        if(e.parentNode === HIJOS[k]){
            return k
        }
    }
}

function encontrar2(e){
    const HIJOS = e.parentNode.parentNode.children;
    for(let k = 0;k<HIJOS.length;k++){
        if(e.parentNode === HIJOS[k]){
            return k
        }
    }
}
function insertar(){
    fetch('php/insertar.php',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            aGuardar:albumes
        })
    })
}

function cargarTodos(){
    document.querySelector(".albumes").innerHTML="";
    fetch("php/cargarTodos.php")
    .then(response=> response.json())
    .then(data => {
        albumes=JSON.parse(data)
        escribir();
    })
}


function eliminarAlbum(e,event){
    document.querySelector(".miAlbum").style.display="none";
    const INDICE = encontrar2(e)
    albumes.splice(INDICE,1)
    escribir();
    e.stopPropagation();
}