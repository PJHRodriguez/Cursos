package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

//Funciones

func Saludar(nombre string) string {
	return "Hola " + nombre + " desde una funcion"
}

//Handlers
func Index(rw http.ResponseWriter, r *http.Request) {

	funciones := template.FuncMap{
		"saludar": Saludar,
	}

	template, error := template.New("funciones.html").Funcs(funciones).
		ParseFiles("funciones.html")

	if error != nil {
		panic(error)
	} else {
		template.Execute(rw, nil)
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
