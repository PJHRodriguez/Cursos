package main

import (
	"fmt"
	"math"
)

type Funciones interface {
	area() float64
	perimetro() float64
}
type Cuadrado struct {
	lado float64
}
type Circulo struct {
	radio float64
}

func (c *Cuadrado) area() float64 {
	return c.lado * c.lado
}

func (c *Cuadrado) perimetro() float64 {
	return 4 * c.lado
}
func (cir *Circulo) area() float64 {
	return math.Pi * (cir.radio * cir.radio)
}

func (cir *Circulo) perimetro() float64 {
	return 2 * math.Pi * cir.radio
}
func medidas(f Funciones) {
	fmt.Println(f)
	fmt.Println(f.area())
	fmt.Println(f.perimetro())
}

func main() {
	cuadrado := Cuadrado{
		lado: 9,
	}
	circulo := Circulo{
		radio: 9,
	}
	medidas(&cuadrado)
	medidas(&circulo)
}
