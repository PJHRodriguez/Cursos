package main

import "fmt"

//Lista de tareas

type TareaList struct {
	tareas []*Tarea
}

func (tl *TareaList) appendTarea(t *Tarea) {
	tl.tareas = append(tl.tareas, t)
}

func (tl *TareaList) deleteTarea(index int) {
	tl.tareas = append(tl.tareas[:index], tl.tareas[index+1:]...)
}

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
	t3 := Tarea{
		name:      "Curso de css",
		desc:      "Completar curso de css",
		completed: false,
	}

	lista := TareaList{}
	lista.appendTarea(&t1)
	lista.appendTarea(&t2)
	lista.appendTarea(&t3)

	lista.deleteTarea(1)
	for i, tarea := range lista.tareas {
		fmt.Println(i, tarea)
	}
}
