from io import open
from os import path

def escribir_archivo():
    archivo = open('Manejo-archivo.txt','w')
    archivo.write('Hola Mundo...')
    archivo.close()

def leer_archivo():
    if path.isfile('Manejo-archivo.txt'):#Verifica si el archivo existe
        archivo = open('Manejo-archivo.txt','r') #read = Lee el archivo
        textos = archivo.readlines()
        archivo.close()
        print(textos)

    else:
        print('No existe el archivo')

def agregar_datos():
    if path.isfile('Manejo-archivo.txt'):
        archivo = open('Manejo-archivo.txt','a') #add = agregar datos el archivo
        archivo.write('\nPablo')
        archivo.close()

    else:
        print('No existe el archivo')

def modificar_datos():
    if path.isfile('Manejo-archivo.txt'):
        archivo = open('Manejo-archivo.txt','r+') #r+ write and read = modo lectura y escritura
        texto = archivo.readlines()
        print(texto)
        texto[1] = 'Hola Pablo\n'
        print(texto)
        archivo.seek(0)#Se coloca el puntero en una posicion en este caso al inicio
        archivo.writelines(texto)#Escribe cada elemento de la lista en una linea del archivo
        archivo.close()
        print(texto)

    else:
        print('No existe el archivo')

modificar_datos()
