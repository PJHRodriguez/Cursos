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

//Uno a muchos
type Curso struct {
	titulo string
	videos []Video
}
type Video struct {
	titulo string
	curso  Curso
}

func main() {
	/* uno a uno
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
	*/

	// uno a muchos
	video1 := Video{titulo: "01-Introduccion"}
	video2 := Video{titulo: "01-Instalacion"}

	curso := Curso{
		titulo: "Curso de Go",
		videos: []Video{video1, video2},
	}

	video1.curso = curso
	video2.curso = curso

	fmt.Println(video1.curso.titulo)

	for _, video := range curso.videos {
		fmt.Println(video.titulo)
	}
}
