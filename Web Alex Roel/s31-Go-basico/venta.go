package main

import "fmt"

func main() {
	var precio float64
	var venta float64
	var igv float64
	fmt.Print("Ingrese el valor del producto :")
	fmt.Scanln(precio)

	igv = precio * .18
	venta = precio + igv
	fmt.Printf("El igv es de : %f \nEl precio de venta con igv es de: %f", igv, venta)

}
