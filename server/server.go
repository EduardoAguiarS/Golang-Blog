package main

import (
	"log"
	"path/filepath"

	"github.com/EduardoAguiarS/Golang-Blog/database"
	"github.com/EduardoAguiarS/Golang-Blog/router"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func init() {
	// Load .env file
	if err := godotenv.Load(filepath.Join("..", ".env")); err != nil {
		log.Fatal("Error loading .env file")
	}

	// Database Connection
	database.ConnectDB()
}
func main() {
	// Database
	sqlDB, err := database.DBConn.DB()
	if err != nil {
		panic("Failed to connect SQL database")
	}
	defer sqlDB.Close()

	// Fiber App
	app := fiber.New()
	app.Use(logger.New())

	// Routes
	router.SetupRoutes(app)

	app.Listen(":3200")
}
