package main

import (
	"fmt"
	"gomysql/db"
	"gomysql/models"
)

func main() {
	db.Connect()
	db.Ping()
	fmt.Println(db.ExistsTable("users"))
	db.CreateTable(models.UserSchema, "users")
	db.Close()
}
