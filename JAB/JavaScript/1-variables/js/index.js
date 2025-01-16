let usuario= null;
let edad= 20
let nota= 95.5
let animal = 'perro'
let seleccionado = true
let nombres=["pablo","juan","ana"]
let edades=[18,55,22]
let imagen={nombre:"Pink",tipo:67,volumen:35}
let usuarios= [
    {
        nombre:"Pablo",
        puntos:646,
        nivel:3
    },
    {
        nombre:"Miguel",
        puntos:123,
        nivel:2
    }
]
//Var ya no es muy utilizada
const NOMBRE = "Pablo"

saludar();
function saludar(){
    edad = 17
    alert("Hola")
    console.log(edad)
    console.log(edades[1])
    console.log(imagen.nombre)
    console.log(usuario[0].nivel)
    console.log(typeof edad)
}