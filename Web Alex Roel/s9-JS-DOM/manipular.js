document.querySelectorAll('.caja');//Selecciona todos los elementos con la clase caja
document.getElementsByClassName('caja');//Selecciona todos los elementos con la clase caja
document.querySelector('#caja1');//Selecciona el elemento con la clase caja1
document.getElementById('caja1');//Selecciona el elemento con la clase caja1

let caja1 = document.querySelector('#caja1');
let btn = document.createElement('button');
caja1.append(btn);
btn.innerText = 'Boton 01';
btn.classList.add('btn');