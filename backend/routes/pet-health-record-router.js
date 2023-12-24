// Importing the Express framework
import express from "express";

// Importing the petHealthRecordController module
import * as petHealthRecordController from "../controllers/pet-health-record-controller.js";

// Creating a new Express router
const router = express.Router();

// Defining routes for handling Pet Health Record functionalities

// Route for creating a new Pet Health Record
router.route("/")
    .post(petHealthRecordController.createPetHealthRecord);

// Route for fetching a Pet Health Record by its ID
router.route("/:id")
    .get(petHealthRecordController.getPetHealthRecordByPetId);

// Exporting the configured router to be used in other parts of the application
export default router;
