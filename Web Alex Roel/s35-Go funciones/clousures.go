package main

import (
	"fmt"
	"strings"
)

//Clousures  "Una funcion retorna una funciona"

func repeat(n int) func(cadena string) string {
	return func(cadena string) string {
		return strings.Repeat(cadena, n)
	}
}

func main() {
	repeat3 := repeat(3)
	fmt.Println(repeat3("Hola"))
}
