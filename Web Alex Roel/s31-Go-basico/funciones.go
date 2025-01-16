package main

import "fmt"

func hola(nombre string) {
	fmt.Println("Hola mundo")
}

func suma(a, b int) int /* Para indicar que regresara un valor entero*/ {
	return a + b
}

func main() {
	hola("Pablo")
	r := suma(10, 20)
	fmt.Println("La suma es: ", r)
}
