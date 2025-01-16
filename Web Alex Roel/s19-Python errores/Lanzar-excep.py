def div(a,b):
    if b == 0:
        raise ZeroDivisionError('Error no se puede divir entre cero.')
    else:
        return a / b

div(4,0)