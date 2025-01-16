from io import open

def escribir_archivo():
    archivo = open('Manejo-archivo.txt','w')# w = write escribir 
    archivo.write('Hola Mundo...')
    archivo.close()


escribir_archivo()

"""
 .write= Reemplaza toda la informacion por la nueva
"""