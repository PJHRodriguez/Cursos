package main

import "fmt"

func recursiva(n int) int {
	if n == 0 {
		return 1
	}

	f := n * recursiva(n-1)

	return f

}
func main() {
	fmt.Println(recursiva(3))
}
