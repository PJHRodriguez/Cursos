package main

import "fmt"

func main() {
	dias := make(map[int]string)
	//PAra crear un mapa (diccionario) la clave sera de tipo entero y lo asociado de string

	fmt.Println(dias)

	dias[1] = "Domingo"
	dias[2] = "Lunes"
	dias[3] = "Martes"
	dias[4] = "Miercoles"
	dias[5] = "Jueves"
	dias[6] = "Viernes"
	dias[7] = "Sabado"

	fmt.Println(dias)

	delete(dias, 1)

	fmt.Println(dias, len(dias))
}
