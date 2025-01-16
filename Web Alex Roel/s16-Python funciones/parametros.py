
def saludar(nombre):
    edad = 25
    return f'Hola {nombre}'

def suma(a,b):
    return a + b

def resta(a,b):
    if a == None or b == None :
        print('Error ingrese datos validos...')
        return
    return a - b

valor = saludar('Pablo')
print(valor)

sumar = suma(10,20)
print(f'La suma es : {sumar}')

restar = resta(b= 20, a= 10)
print(f'La resta es {resta}')