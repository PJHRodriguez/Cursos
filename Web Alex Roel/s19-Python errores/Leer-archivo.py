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

leer_archivo()

"""
    .read = lee todo el documento
    .readlines = lee todo el documento y lo convierte en una lista
"""