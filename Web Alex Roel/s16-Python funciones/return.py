def saludar():
    global nombre
    nombre = 'Pablo Jesus'
    edad = 21
    return 'Hola ',nombre , edad

valor = saludar()
saludo,nombre,edad = saludar()
print(valor)
print(saludo,nombre,edad)