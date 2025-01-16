import random
par = []
impar = []
tupla = (1,2,3,4,5,6,7,8,9)

for n in tupla : 
    numero_random = random.randint(1,100)
    resultado = n * numero_random
    if resultado % 2 == 0:
        print(f'{n} x {numero_random} = {resultado}')
        par.append(resultado)
    else:
        print(f'{n} x {numero_random} = {resultado}')
        impar.append(resultado)

print(f'Lista de pares: {par}')
print(f'Lista de impares: {impar}')