package main

import (
	"fmt"
)

func main() {
	var a int
	var b int
	var cociente int
	var residuo int
	fmt.Print("Ingrese un numero:")
	fmt.Scanln(a)
	fmt.Print("Ingrese un numero:")
	fmt.Scanln(b)

	cociente = a / b

	residuo = a % b

	fmt.Printf("El cociente es : %f \n El residuo es : %f", cociente, residuo)

}
