package main

import "fmt"

func main() {
	// for infinito
	/*for {
		fmt.Println("Hola mundo")
	}
	*/

	// for tipo while
	numeros := 12455
	g := 0

	for numeros > 0 {
		numeros /= 10
		g++
	}
	fmt.Println("Cantidad de digitos: ", g)

	// bucle for

	for j := 0; j <= 10; j++ {
		fmt.Println(j)
	}
}
