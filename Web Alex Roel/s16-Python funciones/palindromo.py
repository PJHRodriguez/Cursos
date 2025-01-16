def palindromo(palabra):

    palabra = palabra.replace(' ', '')
    palabra = palabra.lower()
    
    palabra_invertida = palabra[::-1]
    if palabra == palabra_invertida:
        return True
    else:
        return False

def main():
    palabra = input('Ingrese una palabra: ')
    _palindromo = palindromo(palabra);
    if _palindromo:
        print('Es palindromo')
    else:
        print('No es palindromo')

if __name__ == '__main__':
    main()