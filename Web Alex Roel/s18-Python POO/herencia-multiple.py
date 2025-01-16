class A:
    def __init__(self):
        print('Soy clase A')

    def a(self):
        print('Soy metodo de A')
class B:
    def __init__(self):
        print('Soy clase B')

    def b(self):
        print('Soy metodo de B')

class C(A,B):#La herencia multiple le dara mas importancia de izquierda a derecha a las clases heredadas
    
    def c(self):
        print('Soy metodo de C')

c1= C()#herada la clase de A ya que tiene mas importa y no esta definida en C


