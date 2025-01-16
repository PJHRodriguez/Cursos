const persona = {
    //Elemento o atributo
    nombre : 'Pablo',
    apellido : 'Hernandez',
    edad : 21,

    //Metodos o caracterisiticas
    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    },
    trajes : ['Traje 01','Traje 02','Traje 03'],
    direccion : {
        cp: 44900,
        pais: 'Mexico',
        ciudad : 'Guadalajara'
    }
}
console.log(persona);
console.log(persona.edad);//para acceder a un atributo
console.log(persona.nombreCompleto());//para acceder a un metodo
console.log(persona.trajes);
console.log(persona.direccion.cp);
