numeros = {'uno':1,'dos':2,'tres':3}

numeros['uno']

numeros.get('cuatro','No se encontro')#Busca en el diccionbario si esta el elemento si no regresa el mensaje de alado
numeros.keys()#regresa los valores uno dos tres
numeros.values()#regresa los valores 1 2 3

numeros.items()#regresa claves y valores ^^

numeros.pop('tres')

numeros.clear()

for numero in numeros:
    print(numero)
for numero in numeros.values():
    print(numero)