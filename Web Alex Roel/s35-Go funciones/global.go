package main

import "fmt"

var mensaje string

func function() {
	mensaje = "Hola desde la funcion 1"
	fmt.Println(mensaje)
}

func function2() {
	mensaje = "Hola desde la funcion 2"
	fmt.Println(mensaje)
}

func main() {
	mensaje = "Hola desde la funcion main"
	fmt.Println(mensaje)

	defer function() //Realiza la ejecucion cuando termine de ejecturse todo lo de la funcion main
	function2()

	fmt.Println(mensaje)
}
