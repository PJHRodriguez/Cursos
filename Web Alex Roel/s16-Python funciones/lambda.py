def sumar(a,b):
    return a + b

sumar = lambda a,b:a+b
par = lambda n:n % 2 == 0
impar = lambda n: n % 2 != 0
rever = lambda cadena: cadena[::-1]#Revierte una cadena 
print(sumar(10,20))
print(par(3))
print(impar(5))
print(rever('hola'))