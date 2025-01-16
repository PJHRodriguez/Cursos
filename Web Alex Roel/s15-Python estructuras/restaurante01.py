
consumo = float(input('ingrese el consumo del cliente:'))

if consumo <= 100:

    dato_descuento = '10%'
    descuento = consumo *0.1

elif consumo >100:

    dato_descuento = '20%'
    descuento = consumo *0.2

monto_descuento = consumo - descuento
igv = monto_descuento * 0.19
total_pagar= monto_descuento + igv

print('='*30)
print('----- Factura de consumo -----')
print(f'Descuento que se aplica: {dato_descuento}')
print('='*30)
print(f'consumo: {consumo}')
print(f'descuento: {descuento}')
print(f'Monto con descuento: {monto_descuento}')
print(f'IGV: {igv}')
print(f'Total a pagar: {total_pagar}')
print('='*30)