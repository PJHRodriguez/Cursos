c = 0
while c <10:
    c+=1
    print
    if c == 5:
        print('Salta a la siguiente iteracio')
        continue
    if c == 10:
        print('Termina el bucle')
        break

else:
    print('Fin de while')