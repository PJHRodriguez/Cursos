package main

import "fmt"

type Persona struct {
	nombre string
	edad   int
}

func main() {
	p1 := Persona{"Pablo", 21}
	fmt.Println(p1)
	p1.nombre = "Pepe"

	fmt.Println(p1)

	p2 := Persona{
		nombre: "Jorge",
		edad:   27,
	}
	fmt.Println(p2)
}
