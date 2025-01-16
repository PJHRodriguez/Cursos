#Crear Excepciones

class OperadorExcepcion(Exception):
    def __init__(self,mensaje):
        super().__init__(mensaje)

def div(a,b):
    if b == 0:
        raise OperadorExcepcion('Error no se puede divir entre cero.')
    else:
        return a / b

div(4,0)