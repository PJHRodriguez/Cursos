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
		num, _ := strconv.Atoi(valor)
		result += num
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
