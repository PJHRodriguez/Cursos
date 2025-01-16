package main

import (
	"fmt"
	"strings"
)

func esPalindromo(palabra string) {
	fmt.Println(palabra)
	palabra = strings.ToLower(palabra)
}

func main() {
	esPalindromo("Oso")
}
