//QuerySelector o GetElementById

//Seleccionar un elemento por id
//document.getElementById("cajas").innerHTML=`UNO`

//Seleccionar un elemento por clase

//document.getElementsByClassName("caja")[1].innerHTML=`UNO`

//Seleccionar un elemento por etiqueta

//document.getElementsByTagName("div")[2].innerHTML=`UNO`

//Selecciona cualquier elemento que especifiques

//document.querySelector("#cajas").innerHTML=`UNO`
//Selecciona el primero que encuentre con la clase caja
//document.querySelector(".caja").innerHTML=`UNO`
document.querySelectorAll(".caja")[1].innerHTML=`UNO`
document.querySelectorAll("div")[3].innerHTML=`UNO`
//Accde al elemento dentro de la clase caja y tiene la clase contenido
document.querySelector(".caja .contenido").innerHTML=`UNO`
