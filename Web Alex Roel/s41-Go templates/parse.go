package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

type Usuarios struct {
	UserName string
	Edad     int
}

//ParseGlob para agregar todos los templates "paginas del sitio web en una sola carpeta"
var templates = template.Must(template.New("T").ParseGlob("templates/*.html"))

//Handlers
func Index(rw http.ResponseWriter, r *http.Request) {

	usuario := Usuarios{"pablo", 21}

	err := templates.ExecuteTemplate(rw, "herencia.html", usuario)

	if err != nil {
		panic(err)
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
