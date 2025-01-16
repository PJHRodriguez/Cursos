const CAJA = document.querySelector(".caja");
for(let k=0;k<10;k++){
    CAJA.insertAdjacentHTML("beforeend",`<button class="bt${k}">Boton ${k+1}</button>`);
    document.querySelector(".bt"+k).addEventListener("click",saludar)
}

for(let k=0;k<10;k++){
    const BOTON = document.createElement("button")
    BOTON.textContent=`Boton ${k+11}`
    BOTON.classList.add("bt"+k)
    CAJA.appendChild(BOTON)
    BOTON.addEventListener("click",saludar)
}


function saludar(){
    alert("Hola")
}