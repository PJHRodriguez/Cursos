package main

import (
	"fmt"
	"strconv"
	"strings"
)

func sumar(expresion string) int {
	var result int
	valores := strings.Split(expresion, "+")
	for _, valor := range valores {
		num, error := strconv.Atoi(valor)
		if error != nil {
			fmt.Println(error)
			fmt.Println("error: tiene que ingresar un numero entero")
			fmt.Println("O solo debes realizar con operador +. ")
		} else {
			result += num
		}
	}
	return result
}
func main() {
	var expresion string
	var result int

	fmt.Print("=>")
	fmt.Scanln(&expresion)

	result = sumar(expresion)

	fmt.Printf("=> %d\n", result)
}
