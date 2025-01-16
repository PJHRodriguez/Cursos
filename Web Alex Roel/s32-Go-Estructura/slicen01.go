package main

import "fmt"

func main() {
	//Slicen Son infinitos y no es necesario poner ...
	numeros := []int{1, 2, 3}

	fmt.Println(numeros, len(numeros))

	numeros = append(numeros, 4)
	numeros = append(numeros, 5)

	fmt.Println(numeros, len(numeros))

	subSlicen := numeros[:2]

	numeros[0] = 100

	fmt.Println(subSlicen, len(numeros))
	fmt.Println(numeros, len(numeros))
}
