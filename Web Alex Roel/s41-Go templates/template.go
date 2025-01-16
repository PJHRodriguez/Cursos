package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

//EStructuras
type Usuarios struct {
	UserName string
	Edad     int
	Activo   bool
	Admin    bool
	Cursos   []Curso
}
type Curso struct {
	Nombre string
}

//Handlers
func Index(rw http.ResponseWriter, r *http.Request) {
	c1 := Curso{"Go"}
	c2 := Curso{"Python"}
	c3 := Curso{"Css"}
	c4 := Curso{"HTML"}

	template, error := template.ParseFiles("template.html")
	cursos := []Curso{c1, c2, c3, c4}
	usuario := Usuarios{"Pablo", 26, true, false, cursos}
	if error != nil {
		panic(error)
	} else {
		template.Execute(rw, usuario)
	}
}

func main() {
	//Mux
	mux := http.NewServeMux()
	mux.HandleFunc("/", Index)
	//servidor
	server := &http.Server{
		Addr:    "localhost:3000",
		Handler: mux,
	}
	fmt.Println("Run server: http://localhost:3000/")
	log.Fatal(server.ListenAndServe())
}
