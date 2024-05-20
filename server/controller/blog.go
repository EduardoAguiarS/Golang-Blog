package controller

import "github.com/gofiber/fiber/v2"

// Blog List
func BlogList(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "OK",
		"message":    "Blog List",
	}

	c.Status(200)
	return c.JSON(context)
}

// Blog Create
func BlogCreate(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "OK",
		"message":    "Add a Blog",
	}

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
