
def conversor(valor_dolar,pais):
    cantidad_moneda = float(input(f'Ingrese cantidad de {pais}: '))
    dolares = cantidad_moneda / valor_dolar
    dolares = round(dolares,2)

    print(f'Tienes ${dolares} Dolares')

conversor(20.50,'pesos mexicanos')