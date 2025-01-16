def conversor(valor_dolar,pais):
    cantidad_moneda = float(input(f'Ingrese cantidad de {pais}: '))
    dolares = cantidad_moneda / valor_dolar
    dolares = round(dolares,2)

    print(f'Tienes ${dolares} Dolares')

def main():
    while True:
        menu = """
            1.-Pesos mexicanos a dolares
            2.-Pesos colombianos a dolares
            3.-Soles peruanos a dolares
            4-Euros a dolares
            5.-Salir
            Ingrese una Opcion:
        """
        opcion = input(menu)
        if opcion == '1':
           conversor(20.50,'pesos mexicanos')
        elif opcion == '2':
            conversor(20.50,'pesos colombianos')
        elif opcion == '3':
            conversor(3471.27,'soles peruanos')
        elif opcion == '4':
            conversor(1.14,'euros')
        elif opcion == '5':
            print('Cerrando conversor de monedas...')
            break
        else :
            print('Opcion invalida...')


if __name__ == '__main__':
    main()