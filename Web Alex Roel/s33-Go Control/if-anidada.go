package main

import "fmt"

func main() {
	var consumo, descuento float64
	var datosdescuento string

	fmt.Print("Ingrese consumo:")
	fmt.Scanln(&consumo)

	if consumo >= 0 {
		if consumo <= 100 {
			datosdescuento = "10%"
			descuento = consumo * 0.1
		} else if consumo > 100 && consumo <= 200 {
			datosdescuento = "20%"
			descuento = consumo * 0.2
		} else if consumo > 200 && consumo <= 300 {
			datosdescuento = "30%"
			descuento = consumo * 0.3
		} else {

		}

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
