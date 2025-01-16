package main

import "fmt"

func main() {
	a := 4
	b := 5
	var r bool

	//Operadores relacionales
	r = a == b
	fmt.Printf("%d es igual que %d? %t\n", a, b, r)

	r = a != b
	fmt.Printf("%d es distinto que %d? %t \n", a, b, r)

	r = a > b
	fmt.Printf("%d es mayor que %d? %t \n", a, b, r)

	r = a < b
	fmt.Printf("%d es menor que %d? %t \n", a, b, r)

	r = a >= b
	fmt.Printf("%d es mayor o igual que %d? %t \n", a, b, r)

	r = a <= b
	fmt.Printf("%d es menor o igual que %d? %t \n", a, b, r)

	//Operadores logicos

	// Npt
	fmt.Println(!false)
	//And
	fmt.Println(false && true)
	//Or
	fmt.Println(false || true)

	//Operadores de asignacion

	o := 2
	o = o + 2

	o += 2
	o -= 2
	o *= 2
	o /= 2
	o %= 2

	println(o)

	//Operadores de incremento

	i := 0

	i++ //Suma despues de realizar la condicion 1 vez

	i-- //Resta despues " "

}
