//variadicas "Funcion para usar n datos"
package main

import "fmt"

//"..." ->variadicas
func sumar(numeros ...int) int {
	var total int
	for _, numero := range numeros {
		total += numero
	}
	return total

}

func main() {
	result := sumar(3, 4, 6, 8, 12, 54, 85, 23, 54, 12)
	fmt.Println(result)
}
