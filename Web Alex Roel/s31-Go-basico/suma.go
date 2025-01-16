package main

import "fmt"

func main() {
	var a float64
	var b float64
	fmt.Print("Ingrese un numero :")
	fmt.Scanln(a)

	fmt.Print("Ingrese un numero :")
	fmt.Scanln(b)

	suma := a + b

	fmt.Println("La suma es :", suma)
}
