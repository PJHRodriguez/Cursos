
class Persona:
    def __init__(self, nombre, edad): #Constructor
        self.nombre = nombre
        self.edad = edad 
        

    def imprimir(self):
        print('Nombre: ', self.nombre)
        print('Edad: ', self.edad)

    def __str__(self): #Imprime todo los atribots que definamos  pero al usar print Ejmeplo : "print(persona!)"
        return f'Nombre: {self.nombre} \nEdad: {self.edad}'