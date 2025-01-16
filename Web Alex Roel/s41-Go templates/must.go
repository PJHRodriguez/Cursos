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

//Handlers
func Index(rw http.ResponseWriter, r *http.Request) {

	template := template.Must(template.New("herencia.html").ParseFiles("herencia.html", "herencia02.html"))
	usuario := Usuarios{"pablo", 21}

	template.Execute(rw, usuario)
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
