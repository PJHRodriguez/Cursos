div = 0
try:
    a = int(input('Ingrese el dividendo: '))
    b = int(input('Ingrese el divisor: ' ))

    div = a / b

    print('La division es: ',div)
except ValueError: #Cuando el usuario ingresa el tipo de dato equivocado
    print('Error ingrese solo numeros enteros!')
except ZeroDivisionError:#Cuando se divide un numero sobre 0
    print('No se puede divir entre cero.')
except Exception as Error: #Retorna el error que se produjo
    print('Ha ocurrido un error no previsto: ', Error)#Envia el error en si
    print('Tipo de error: ', type(Error).__name__)#Envia el tipo de clase de error

