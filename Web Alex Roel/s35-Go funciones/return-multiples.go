package main

import "fmt"

//"..." ->variadicas
func sumar(nombre string, numeros ...int) (string, int) {
	mensaje := fmt.Sprintf("La suma de %s es: ", nombre)
	var total int
	for _, numero := range numeros {
		total += numero
	}
	return mensaje, total

}

func main() {
	mensaje, result := sumar("Pablo", 3, 4, 6, 8, 12, 54, 85, 23, 54, 12)
	fmt.Println(mensaje, result)
}
