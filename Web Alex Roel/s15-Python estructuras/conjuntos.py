a  = set()

a={'a','b','c'}

#No se permite que el elemento se repita

b= set()
b={'c','d','e'}

a-b #elimina los elementos que tiene b de a
a | b #suma los elementos de a y b
a & b #Elementos que comparten
a ^ b #Elementos que no comparten
a.add('f')
a.clear()