package main

import "fmt"

func modificar(cadena *string) {
	fmt.Printf("%p\n", cadena)
	*cadena = "Hola desde funcion"
}

func main() {
	cadena := "Hola mundo"
	fmt.Printf("%p\n", &cadena)
	fmt.Println("Antes de la funcion: ", cadena)

	modificar(&cadena)

	fmt.Println("Despues de la funcion: ", cadena)
}
