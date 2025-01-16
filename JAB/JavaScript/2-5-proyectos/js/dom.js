//Manipulacion basica del dom
actividad()

function tema(){
    let nombre = "Pablo"
    let edad = 20
    let actual= new Date().getFullYear();


    let resultado = "Mi nombre es" + nombre;


    document.querySelector("body").innerHTML = `
        <div>Mi nombre es <strong>${nombre}</strong> y mi año de nacimiento es ${fechaNacimiento()}</div>
    `

    function fechaNacimiento(){
        return actual - edad;
    }
    }

function actividad(){
    let usuario="Jab";
    let productoComprado=1;
    const DESCUENTO=0.1;
    let precioDescuento;
    const PRODUCTOS=[{
        producto:"Pantalón",
        precio:10,
        talla:"m",
        imagen:"pantalon.jpg"
    },{
        producto:"Gorra",
        precio:5,
        talla:"s",
        imagen:"gorra.jpg"
    }
    ];
    calcularDescuento()

    document.querySelector("body").innerHTML = `
        <h1>${usuario}</h1>
        <section class="caja">
            <div>
            ${PRODUCTOS[productoComprado].producto}
            </div>
            <div>
            Descuento : $${precioDescuento}
            </div>
            <div>
            Precio total: $${PRODUCTOS[productoComprado].precio - precioDescuento}
            </div>
            <div>
            Talla: ${PRODUCTOS[productoComprado].talla.toUpperCase()}
            </div>
            <img src="./img/${PRODUCTOS[productoComprado].imagen}" />

        </section>

    `
    function calcularDescuento(){
        precioDescuento = PRODUCTOS[productoComprado].precio * DESCUENTO
    }
}

