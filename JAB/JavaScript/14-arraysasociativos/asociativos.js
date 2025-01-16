const contenedor = document.querySelector("body");
const lenguajes1={
    "JavaScript" : {
        "nombre" : "Javascript",
        "inicio" : 1995
    },
    "React" : {
        "nombre" : "React",
        "inicio" : 2013
    },
    "Next" : {
        "nombre" : "Next.js",
        "inicio" : 2016
    },
    "PHP" : {
        "nombre" : "PHP",
        "inicio" : 1994
    },
}

contenedor.innerHTML+="<div>El año de aparacion de JavaScript es "+lenguajes1["JavaScript"]["inicio"]+"</div>";

const nuevoArray= Object.keys(lenguajes1)
.filter(valor=>lenguajes1[valor].inicio > 2000)
.map(valor =>{
    contenedor.innerHTML+=`
        <div>
            ${lenguajes1[valor].nombre} aparecio en ${lenguajes1[valor].inicio}
        </div>
    `
    return valor;
})


nuevoArray.forEach(valor =>{
    contenedor.innerHTML+=`
        <div>
            ${lenguajes1[valor].nombre} aparecio en ${lenguajes1[valor].inicio}
        </div>
    `
})