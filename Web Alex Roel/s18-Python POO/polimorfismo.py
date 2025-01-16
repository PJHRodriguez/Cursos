class Persona(object):
    def __init__(self , nombre):
        self.nombre = nombre

    def moverse(self):
        print('Ando caminando')


class Atleta(Persona):
    #El polimorfismo modifica el contenido de una funcion para asociarse mejor a su herencia
    def moverse(self):
        print('Ando corriendo')

class Ciclista(Persona):

    def moverse(self):
        print('Ando moviendome con la bicicleta')
        