package main

import "fmt"

func main() {
	var consumo, descuento float64
	var datosdescuento string

	fmt.Print("Ingrese consumo:")
	fmt.Scanln(&consumo)

	if consumo >= 0 {
		datosdescuento = "10%"
		descuento = consumo * 0.1

	} else {
		fmt.Println("Error cantidad invalida...")
	}

	montoDescuento := consumo - descuento
	igv := montoDescuento * .19
	totalpagar := montoDescuento + igv

	fmt.Println("------ Factura de consumo ------")
	fmt.Println("Descuento que aplica: ", datosdescuento)
	fmt.Println("Consumo: ", consumo)
	fmt.Println("Descuento: ", descuento)
	fmt.Println("Monto con descuento: ", montoDescuento)
	fmt.Println("IGV: ", igv)
	fmt.Println("Total a pagar: ", totalpagar)
	fmt.Println("--------------------------------")

}
