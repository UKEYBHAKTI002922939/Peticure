// Importing the Express framework
import express from "express";

// Importing the shelterController module
import * as shelterController from "../controllers/shelter-controller.js";

// Creating a new Express router
const router = express.Router();

// Defining routes for handling Shelter functionalities

// Route for getting all shelters or creating a new shelter
router.route("/")
    .get(shelterController.getShelters) // GET request to fetch all shelters
    .post(shelterController.createShelter); // POST request to create a new shelter

// Router for handling requests with shelter IDs

router.route("/:id")
    .get(shelterController.getSheltersbyId) // GET request to fetch a shelter by ID
    .put(shelterController.updateSheltersbyId) // PUT request to update a shelter by ID
    .delete(shelterController.remove); // DELETE request to remove a shelter by ID

// Exporting the configured router to be used in other parts of the application
export default router;
