package main

import "fmt"

func main() {
	hola := "hola"
	mundo := "mundo"
	var porteclado string

	fmt.Println(hola, mundo) //Hace salto de linea
	fmt.Print(hola, mundo)   //No lo hace

	nombre := "Pablo"
	edad := 21

	fmt.Printf("Hola %s y su edad es %d \n", nombre, edad)
	// %v para definir que no sabes que tipo de dato es lo que se va a imprimir

	mensaje := fmt.Sprintf("Hola %s y su edad es %d \n", nombre, edad)
	fmt.Println(mensaje)

	fmt.Printf("Nombre: %T \n", nombre) //Para saber de que tipo es
	fmt.Print("ingrese un nombre :")
	fmt.Scanln(&porteclado)

	fmt.Println("Otro nombre:", porteclado)

}
