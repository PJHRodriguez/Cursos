package main

import "fmt"

type Tarea struct {
	name      string
	desc      string
	completed bool
}

func (t *Tarea) toPrint() {
	fmt.Printf("Nombre: %s\nDescripcion: %s\nCompletado: %t\n", t.name, t.desc, t.completed)
}

func (t *Tarea) markCompleted() {
	t.completed = true
}
func main() {
	t1 := Tarea{
		name:      "Curso de go",
		desc:      "Completar curso de go",
		completed: false,
	}
	t2 := Tarea{
		name:      "Curso de html",
		desc:      "Completar curso de html",
		completed: false,
	}
	t1.toPrint()
	t2.toPrint()
}
