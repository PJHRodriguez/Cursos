from figuras import Rectangulo,Circulo,probar_figura

def main():
    while True:
        menu = """
            ==============================
            Area y Perimetros de figuras
            ==============================
            1.-Rectangulo
            2.-Circulo
            3.-Salir
            Ingrese una opcion:
            ==============================
        """
        opcion = input(menu)

        if opcion == '1':
            base = float(input('Ingrese la base:'))
            altura = float(input('Ingrese una altura: '))
            r = Rectangulo(base, altura)
            probar_figura(r)

        elif opcion == '2':
            radio = float(input('Ingrese el radio:'))
            c = Circulo(radio)
            probar_figura(c)

        elif opcion == '3':
            print('Saliendo del programa...')
            break

        else:
            print('Opcion invalida...')

if __name__ == '__main__':
    main()