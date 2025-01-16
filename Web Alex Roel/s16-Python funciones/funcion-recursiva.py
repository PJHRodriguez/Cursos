def factorial(n):
    print(f'valor inicial => {n}')

    if n > 1:
        n *=factorial(n-1)#Vuelve a llamar la funcion
    
    print(f'Valor final = > {n}')
    return n

f = factorial(4)
print(f'El factorial es : {f}')