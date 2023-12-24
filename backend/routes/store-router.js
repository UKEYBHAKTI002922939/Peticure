// Importing the Express framework
import express from "express";

// Importing the storeController module
import * as storeController from "../controllers/store-controller.js";

// Creating a new Express router
const router = express.Router();

// Defining routes for Store functionalities

// Route for retrieving store inventory
router.route("/inventory")
    .get(storeController.getStoreInventory); // GET request to fetch store inventory

// Route for placing an order
router.route("/order")
    .post(storeController.placeOrder); // POST request to place an order in the store

// Exporting the configured router to be used in other parts of the application
export default router;
