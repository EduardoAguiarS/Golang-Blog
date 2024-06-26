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

func BlogDetail(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "OK",
		"message":    "Blog Detail",
	}

	id := c.Params("id")

	db := database.DBConn
	var blog model.Blog
	db.First(&blog, id)

	if blog.ID == 0 {
		context["statusText"] = "Not Found"
		context["message"] = "Blog not found"
		c.Status(404)
		return c.JSON(context)
	}

	context["data"] = blog

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

	if record.Title == "" || record.Body == "" {
		context["statusText"] = "Bad Request"
		context["message"] = "Title and Body are required"
		c.Status(400)
		return c.JSON(context)
	}

	if record.ID != 0 {
		context["statusText"] = "Bad Request"
		context["message"] = "ID should not be provided in the request body"
		c.Status(400)
		return c.JSON(context)
	}

	if record.Image == "" {
		record.Image = "https://placehold.co/480x192"
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

	id := c.Params("id")
	var record model.Blog
	database.DBConn.First(&record, id)

	var updatedRecord model.Blog
	if err := c.BodyParser(&updatedRecord); err != nil {
		context["statusText"] = "Bad Request"
		context["message"] = err.Error()
		c.Status(400)
		return c.JSON(context)
	}

	updatedRecord.ID = record.ID

	if record.ID == 0 {
		context["statusText"] = "Not Found"
		context["message"] = "Blog not found"
		c.Status(404)
		return c.JSON(context)
	}

	if updatedRecord.Title == "" {
		updatedRecord.Title = record.Title
	}

	if updatedRecord.Body == "" {
		updatedRecord.Body = record.Body
	}

	if updatedRecord.Image == "" {
		updatedRecord.Image = record.Image
	}

	result := database.DBConn.Save(&updatedRecord)
	if result.Error != nil {
		context["statusText"] = "Bad Request"
		context["message"] = result.Error.Error()
		c.Status(400)
		return c.JSON(context)
	}

	context["message"] = "Blog is updated successfully"
	context["data"] = record

	c.Status(200)
	return c.JSON(context)
}

// Blog Delete
func BlogDelete(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "OK",
		"message":    "Blog Deleted",
	}

	id := c.Params("id")
	var record model.Blog
	database.DBConn.First(&record, id)

	if record.ID == 0 {
		context["statusText"] = "Not Found"
		context["message"] = "Blog not found"
		c.Status(404)
		return c.JSON(context)
	}

	result := database.DBConn.Delete(&record)
	if result.Error != nil {
		context["statusText"] = "Bad Request"
		context["message"] = result.Error.Error()
		c.Status(400)
		return c.JSON(context)
	}

	context["message"] = "Blog is deleted successfully"
	context["data"] = record

	c.Status(200)
	return c.JSON(context)
}
