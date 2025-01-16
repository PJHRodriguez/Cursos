package main

import (
	"fmt"
)

func main() {
	if nombre, edad := "Pablo", 21; nombre == "Pablo" {
		fmt.Println("Hola ", nombre)
	} else {
		fmt.Printf("Nombre: %s - Edad: %d\n", nombre, edad)
	}

	users := make(map[string]string)

	users["Pablo"] = "pablo123@gmail.com"
	users["Pepe"] = "pepe123@gmail.com"

	if correo, ok := users["Pablo"]; ok {
		fmt.Println(correo, ok)
	} else {
		fmt.Println("No se encontro el valor...")
	}
}
