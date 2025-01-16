def decorador(func):
    
    def decorar(*args):
        print('Inicia la ejecucion de la funcion: ', func.__name__)
        func(*args)
        print('Termina la ejecucion de la funcion: ', func.__name__)

    return decorar

@decorador #Envia la funcion a decorador que se encuentre una linea abajo
def hola(nombre):
    print('Hola ',nombre)

@decorador 
def sumar(a, b):
    suma = a + b
    print('La suma es: ',suma)

sumar(10,1)