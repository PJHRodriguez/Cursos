package main

import (
	"fmt"
	"strings"
)

func reverse(cadena string) string {
	arrayCadena := strings.Split(cadena, "")
	arrayReverse := make([]string, 0)
	for i := len(arrayCadena) - 1; i >= 0; i-- {
		arrayReverse = append(arrayReverse, arrayCadena[i])
	}
	return strings.Join(arrayReverse, "")
}

func esPalindromo(palabra string) bool {
	fmt.Println(palabra)
	palabra = strings.ToLower(palabra)
	palabra = strings.ReplaceAll(palabra, " ", "")
	palabraReverse := reverse(palabra)
	return palabra == palabraReverse
}

func main() {
	if esPalindromo("Oso") {
		fmt.Println("Es palindromo")
	} else {
		fmt.Println("No es palindromo")
	}
}
