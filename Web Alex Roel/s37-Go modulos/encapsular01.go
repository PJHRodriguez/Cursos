package main

import (
	"fmt"
	"paquetes/encapsular"
)

func main() {
	p1 := encapsular.Persona{}
	p1.Cons("pablo", 21)
	p1.SetNombre("Pepe")
	fmt.Println(p1)
}
