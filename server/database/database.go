package database

import (
	"log"
	"os"
	"path/filepath"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	"github.com/EduardoAguiarS/Golang-Blog/model"
	"github.com/joho/godotenv"
)

var DBConn *gorm.DB

func ConnectDB() {
	err := godotenv.Load(filepath.Join("..", ".env"))
	if err != nil {
		log.Fatal("Error loading .env file")
	}

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
