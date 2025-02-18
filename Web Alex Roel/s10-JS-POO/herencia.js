class Persona{
    
    constructor(nombre , edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    detallePersona(){
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`);
    }

}

class Empleado extends Persona{
    
    sueldo;

    constructor(nombre, edad, sueldo){
        super(nombre,edad);//Hereda el constructor de la clase padre(Persona)
        this.sueldo = sueldo;
    }
    detallePersona(){
        super.detallePersona();
        console.log(`Sueldo: ${this.sueldo}`);
    }

}

const em1 = new Empleado('Pablo',21,500);
console.log(em1);

em1.detallePersona();