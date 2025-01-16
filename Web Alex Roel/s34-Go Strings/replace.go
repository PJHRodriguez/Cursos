package main

import (
	"fmt"
	"strings"
)

func esPalindromo(palabra string) {
	fmt.Println(palabra)
	palabra = strings.ToLower(palabra)
	palabra = strings.ReplaceAll(palabra, " ", "")
}

func main() {
	esPalindromo("Oso")
}
