import sys

if len(sys.argv) == 3:
    #print(sys.argv)#Genera una lista en el compilador cuando escribimos ejemplo: script.py "Hola mundo" 4 2.5 True Lo volvera una lista cada elemento
    texto = sys.argv[1]
    cantidad = int(sys.argv[2])#Genera una cantidad de veces la primera palabra que le enviemos ejemplo :script.py "Hola mundo" 10 Imprimira 10 vecez hola mundo desde el compilador
 
    c= 0

    while c < cantidad:
        print(texto)
        c+=1
else:
    print('Error entrada de datos invalida')
    print('Ejemplo: script.py "Texto" 3')