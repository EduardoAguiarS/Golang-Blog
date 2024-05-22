package controller

import (
	"github.com/EduardoAguiarS/Golang-Blog/database"
	"github.com/EduardoAguiarS/Golang-Blog/model"
	"github.com/gofiber/fiber/v2"
)

// Blog List
func BlogList(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "OK",
		"message":    "Blog List",
	}

	db := database.DBConn
	var blogs []model.Blog
	db.Find(&blogs)

	context["data"] = blogs

	c.Status(200)
	return c.JSON(context)
}

// Blog Create
func BlogCreate(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "OK",
		"message":    "Add a Blog",
	}

	record := new(model.Blog)
	if err := c.BodyParser(record); err != nil {
		context["statusText"] = "Bad Request"
		context["message"] = err.Error()
		c.Status(400)
		return c.JSON(context)
	}

	result := database.DBConn.Create(&record)
	if result.Error != nil {
		context["statusText"] = "Bad Request"
		context["message"] = result.Error.Error()
		c.Status(400)
		return c.JSON(context)
	}

	context["message"] = "Blog is saved successfully"
	context["data"] = record

	c.Status(201)
	return c.JSON(context)
}

// Blog Update
func BlogUpdate(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "OK",
		"message":    "Update a Blog",
	}

	c.Status(200)
	return c.JSON(context)
}

// Blog Delete
func BlogDelete(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "OK",
		"message":    "Blog Deleted",
	}

	c.Status(200)
	return c.JSON(context)
}
