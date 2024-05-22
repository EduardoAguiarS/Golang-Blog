package database

import (
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	"github.com/EduardoAguiarS/Golang-Blog/model"
)

var DBConn *gorm.DB

func ConnectDB() {
	host := os.Getenv("db_host")
	user := os.Getenv("db_user")
	password := os.Getenv("db_pass")
	dbname := os.Getenv("db_name")
	dbport := os.Getenv("db_port")

	dsn := user + ":" + password + "@tcp(" + host + ":" + dbport + ")/" + dbname + "?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Error),
	})

	if err != nil {
		panic("failed to connect database")
	}

	log.Println("Connection Opened to Database")

	db.AutoMigrate(&model.Blog{})

	DBConn = db
}
