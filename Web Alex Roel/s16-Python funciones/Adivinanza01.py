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
    jugar(10);

if __name__ == '__main__':
    main()