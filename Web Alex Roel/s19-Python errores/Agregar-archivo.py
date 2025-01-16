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

agregar_datos()
"""
    .write= Permite agregar datos en el docuemtno
"""