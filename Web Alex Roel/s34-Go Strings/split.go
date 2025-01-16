package main

import (
	"fmt"
	"strings"
)

func reverse(cadena string) string {
	arrayCadena := strings.Split(cadena, "")
	fmt.Println(arrayCadena)
	return ""
}

func esPalindromo(palabra string) {
	fmt.Println(palabra)
	palabra = strings.ToLower(palabra)
	palabra = strings.ReplaceAll(palabra, " ", "")
}

func main() {
	esPalindromo("Oso")
}
