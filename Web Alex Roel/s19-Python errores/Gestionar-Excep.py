c = 0
suma = 0
while c < 3 :
    try: #Si no hay fallas realiza esto
        n  = int(input('Ingrese un numero: '))
        suma +=n
        c += 1
    except:#Si hay fallos realiza esto
        print('Ingrese solo numeros enteros.')
    else:  #Si no hay fallos tambien realiza esto
        print('Todo ha funcionado correctamente...')
    finally:#Se ejecuta al final de la ejecucion con o sin errores
        print('Fin de la ejecucion')
print('La suma total es: ',suma)

