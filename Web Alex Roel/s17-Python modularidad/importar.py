#Formas de importar

import modulo#Importa el modulo completo
from modulo import fibo#Importa desde el modulo una funcion
from modulo import * #Importa el modulo completo
import modulo as f #Importa las funcion del modulo
from modulo import fibo as f1
from modulo import fibo2 as f2


modulo.fibo(100)
fibo(100)
modulo.fibo(100)
f.fibo(100)
f1(100)
f2(100)