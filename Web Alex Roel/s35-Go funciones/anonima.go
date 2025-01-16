package main

import "fmt"

func main() {
	//Funcion anonima
	func() {
		fmt.Println("Hola mundo")
	}()

	fun := func(nombre string) string {
		return fmt.Printf("Hola %s", nombre)
	}

	fmt.Println(fun("Pablo"))
}
