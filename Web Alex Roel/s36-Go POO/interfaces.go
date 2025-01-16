package main

import "fmt"

type Animal interface {
	mover() string
}
type Perro struct{}
type Pez struct{}
type Dragon struct{}

func (*Perro) mover() string {
	return "Soy perro y camino"
}

func (*Pez) mover() string {
	return "Soy pez y nado"
}

func (*Dragon) mover() string {
	return "Soy dragon y vuelo"
}

func MoverAnimal(animal Animal) {
	fmt.Println(animal.mover())
}
func main() {
	perro := Perro{}
	MoverAnimal(&perro)

	pez := Pez{}
	MoverAnimal(&pez)

	dragon := Dragon{}
	MoverAnimal(&dragon)
}
