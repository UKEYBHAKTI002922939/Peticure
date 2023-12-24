// Importing the Express framework
import express from "express";

// Importing the petController module
import * as petController from "../controllers/pet-controller.js";

// Creating a new Express router
const router = express.Router();

// Defining routes for handling Pet functionalities

// Route for getting all pets or creating a new pet
router.route("/")
    .get(petController.getPets) // GET request to fetch all pets
    .post(petController.createPet); // POST request to create a new pet

// Router for handling requests with pet IDs

router.route("/:id")
    .get(petController.getPetsbyId) // GET request to fetch a pet by ID
    .put(petController.updatePetsbyId) // PUT request to update a pet by ID
    .delete(petController.remove); // DELETE request to remove a pet by ID

// Exporting the configured router to be used in other parts of the application
export default router;
