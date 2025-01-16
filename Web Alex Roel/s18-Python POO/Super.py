class Persona:
    def __init__(self, nombre, edad): 
        self.nombre = nombre
        self.edad = edad 
        
    def detalle_persona(self):
        print(f'Nombre: {self.nombre} \nEdad: {self.edad}')

    def __str__(self): 
        return f'Nombre: {self.nombre} \nEdad: {self.edad}'

class Cliente(Persona): 
    pass

#Funcion super
class Empleado(Persona):
    def __init__(self, nombre, edad, sueldo):
        super().__init__(nombre, edad)
        self.sueldo = sueldo
    
    def detalle_empleado(self):
        super().detalle_persona()
        print('Sueldo : ', self.sueldo)
    
    def __str__(self):
        return super().__str__() + f'\nSueldo : {self.sueldo}'
        