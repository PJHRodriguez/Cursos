print('Precio de venta')

vv = float(input('Ingrese el valor de venta del producto:'))

igv= vv * .18
pv = vv + igv;

print('='*25)
print('---- FACTURA DE VENTA ---')
print('='*25)
print("El IGV es de :", igv)
print("El precio de venta con IGV es de:", pv)
print('='*25)