package main

import (
	"github.com/EduardoAguiarS/Golang-Blog/database"
	"github.com/EduardoAguiarS/Golang-Blog/router"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func init() {
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
