//Variables
let vv = 0, igv = 0, pv = 0;

//Entrada de datos
vv= parseFloat(prompt('Ingrese un numero'));

//Operaciones
igv = vv * 0.19;
pv = vv + igv;

//Salida de datos
document.write('Valor de venta: ',vv ,'<br>');
document.write('Iva: ',igv,'<br>');
document.write('Precio de venta: ',pv, '<br>');