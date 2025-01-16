package main

func main() {
	nombres := [...]string{"Pablo", "Rafa", "Juan"}

	/*
		for i := 0; i < len(nombres); i++ {
			fmt.Println(nombres[i])
		}
	*/
	//Forma comun

	for indice, elemento := range nombres {
		println(indice, elemento)
	}
	//Imprime el indice y el elemento

	for _, elemento := range nombres {
		println(elemento)
	}
	//Imprime solo el elemento

	for indice, _ := range nombres {
		println(indice)
	}
	//imprime solo el indice
}
