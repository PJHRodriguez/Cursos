import paquetes.aritmetica as a

def main():
    suma = a.sumar(4,3,4,6,)
    resta = a.restar(4,3)
    potencia = a.potencia(9,5)

    print('La suma es: ',suma)
    print('La resta es: ', resta)
    print('La potencia es: ',potencia)

if __name__ == '__main__':
    main()