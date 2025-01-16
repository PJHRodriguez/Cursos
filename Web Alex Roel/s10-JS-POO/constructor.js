class Persona{
    nombre;
    edad;
    
    constructor(nombre , edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    imprimir(){
        console.log(this.nombre , this.edad);
    }

}
const p1 = new Persona('Pablo',21);
const p2 = new Persona('Jesus',21);


p1.imprimir();
p2.imprimir();