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

var templates = template.Must(template.New("T").ParseGlob("templates/*.html"))
var errortemplate = template.Mus(template.ParseFiles("templates/error.html"))

//Handler error

func handleError(rw, http.ResponseWriter) {
	errortemplate.Execute(rw, nil)
}

//ParseGlob para agregar todos los templates "paginas del sitio web en una sola carpeta"

func renderTemplate(rw http.ResponseWriter, name string, data interface{}) {
	err := templates.ExecuteTemplate(rw, name, data)

	if err != nil {
		handleError(rw)
		//http.Error(rw, "No es posible retonar el template", http.StatusInternalServerError)
	}
}

func Index(rw http.ResponseWriter, r *http.Request) {

	usuario := Usuarios{"pablo", 21}
	renderTemplate(rw, "herencia.html", usuario)
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
