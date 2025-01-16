class Persona{
    nombre;
    edad;
    
    imprimir(){
        console.log(this.nombre , this.edad);
    }

}
const p1 = new Persona();
p1.nombre = 'Pablo';
p1.edad = 21;

console.log(p1);