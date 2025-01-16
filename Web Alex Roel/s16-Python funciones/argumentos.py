def sumar(*args, **kwargs):#Para agregar un numero indenifido de argumento
    suma = 0
    for n in args:
        suma += n
    return suma

suma_total =sumar(1,2,3,nombre = 'Pablo', edad= 20)
print(f'La suma total es : {suma_total}')
