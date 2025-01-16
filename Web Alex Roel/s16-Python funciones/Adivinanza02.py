import random

def jugar(vidas):
    numero_random = random.randint(1,100)
    numero_elegido = None

    while numero_random != numero_elegido:
        numero_elegido = int(input('Ingrese un numero entre 1 y 100:'))
        if numero_random < numero_elegido:
            print('Elige un numero mas pequeño')
        elif numero_random > numero_elegido:
            print('Elige un numero mas grande')
        
        if vidas == 0:
            print('Game over')
            break
        print(f'Te quedan {vidas} vidas')

    if numero_elegido == numero_random:
        print("Felicidades ganaste")

def main():
    while True:
        menu = """
        Adivina el numero
        1.- Nivel facil
        2.- Nivel intermedio
        3.- Nivel dificil
        4.- Salir
        Elige una opcion:
        """
        opcion = input(menu)
        if opcion == '1':
            jugar(10)
        elif opcion == '2':
            jugar(6)
        elif opcion == '3':
            jugar(3)
        elif opcion == '4':
            print('Cerrando el programa...')
            break
        else:
            print('Opcion no valida')

if __name__ == '__main__':
    main()