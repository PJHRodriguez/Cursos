package main

import (
	"fmt"
	"strings"
)

func sumar(expresion string) {
	valores := strings.Split(expresion, "+")
	fmt.Println(valores)
}
func main() {
	var expresion string
	var result int

	fmt.Print("=>")
	fmt.Scanln(&expresion)
	fmt.Println(result)
	fmt.Println(result)
}
