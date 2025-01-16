package main

import (
	"fmt"
	"os"
)

func main() {

	if file, error := os.Open("hola.txt"); error != nil {
		panic("No fue posible obtener el archivo")
	} else {

		defer func() {
			fmt.Println("Cerrando el archivo.")
			file.Close()
		}()

		contenido := make([]byte, 254)
		long, _ := file.Read(contenido)
		contenidoArchivo := string(contenido[:long])
		fmt.Println(contenidoArchivo)
	}

}
