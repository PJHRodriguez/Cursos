package main

import "fmt"

func main() {
	var numeros [5]int
	fmt.Println(numeros)

	numeros[0] = 1
	numeros[1] = 2
	numeros[2] = 3
	numeros[3] = 4
	numeros[4] = 5

	fmt.Println(numeros)
	fmt.Println(numeros[3])
}
