package main

import "fmt"

type Persona struct {
	nombre string
	edad   int
}

//Metodos
func (p *Persona) imprimir() {
	fmt.Printf("Nombre: %s \nEdad: %d\n", p.nombre, p.edad)
}

func (p *Persona) editNombre(nuevoN string) {
	p.nombre = nuevoN
}

func main() {
	p1 := Persona{"Pablo", 21}
	p1.imprimir()
	p1.editNombre("Juan")

	p1.imprimir()

	p2 := Persona{
		nombre: "Jorge",
		edad:   27,
	}
	p2.imprimir()
}
