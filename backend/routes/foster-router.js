// Importing the Express framework
import express from "express";

// Importing the fosterController module
import * as fosterController from "../controllers/foster-controller.js";

// Creating a new Express router
const router = express.Router();

// Defining routes for handling Foster functionalities

// Route for getting all fosters or creating a new foster
router.route("/")
    .get(fosterController.getFosters) // GET request to fetch all fosters
    .post(fosterController.createFoster); // POST request to create a new foster

// Router for handling requests with foster IDs

router.route("/:id")
    .get(fosterController.getFostersbyId) // GET request to fetch a foster by ID
    .put(fosterController.updateFostersbyId) // PUT request to update a foster by ID
    .delete(fosterController.remove); // DELETE request to remove a foster by ID

// Exporting the configured router to be used in other parts of the application
export default router;
