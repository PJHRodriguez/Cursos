
class Persona:
    def __init__(self, nombre, edad): #Constructor
        self.nombre = nombre
        self.edad = edad 
        
    def detalle_persona(self):
        print(f'Nombre: {self.nombre} \nEdad: {self.edad}')

    def __str__(self): #Imprime
        return f'Nombre: {self.nombre} \nEdad: {self.edad}'

class Cliente(Persona): #Herencia
    pass