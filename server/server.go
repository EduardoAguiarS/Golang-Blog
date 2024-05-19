package main

import (
	"github.com/EduardoAguiarS/Golang-Blog/database"
	"github.com/gofiber/fiber/v2"
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

	app.Get("/", func(c *fiber.Ctx) error {
		c.Status(200)

		return c.JSON(fiber.Map{
			"message": "Hello, World!",
		})
	})

	app.Listen(":3200")
}
