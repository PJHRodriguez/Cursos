package main

import "fmt"

type User struct {
	nombre string
	email  string
	activo bool
}

type Student struct {
	user   User
	codigo string
}

func main() {

	pablo := User{
		nombre: "Pablo",
		email:  "pablo@gmail.com",
		activo: true,
	}
	pepe := User{
		nombre: "Pepe",
		email:  "pepe@gmail.com",
		activo: true,
	}
	pepeSudent := Student{
		user:   pepe,
		codigo: "00ab93f",
	}

	fmt.Println(pablo)
	fmt.Println(pepe)
	fmt.Println(pepeSudent)
	fmt.Println(pepeSudent.user)
	fmt.Println(pepeSudent.user.nombre)
}
