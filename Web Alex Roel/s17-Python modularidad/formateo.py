from sys import argv

if len(argv) == 4:
    nombre = argv[1]
    edad = int(argv[2])
    altura = float(argv[3])

    #Forma 1 : print(f'Nombre: {nombre}\nEdad:{edad}\nAltura:{altura}')
    #Forma 2 : print('Nombre: {} \nEdad: {} \nAltura: {}'.format(nombre,edad,altura))
    #Forma 3 : print('Nombre: {n} \nEdad: {e} \nAltura: {a}'.format(n=nombre,e=edad,a=altura))
    print(f'Nombre: %s \nEdad: %d \nAltura: %f'%(nombre,edad,altura))
else:
    print('Error entrada de datos invalida')
    print('Ejemplo: formateo.py "Nombre" 32 1.64')