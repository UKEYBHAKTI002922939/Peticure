// Importing the Express framework
import express from "express";

// Importing the userController module
import * as userController from "../controllers/user-controller.js";

// Creating a new Express router
const router = express.Router();

// User Routes

// Route to get all users
router.route("/users").get(userController.getAllUsers);

// Route to get a user by ID
router.route("/users/:id").get(userController.getUserById);

// Route to create a new user
router.route("/users/signup").post(userController.createUser);

// Route to update a user by ID
router.route("/users/:id").put(userController.updateUserById);

// Route to delete a user by ID
router.route("/users/:id").delete(userController.deleteUserById);

// Route to find a user by email
router.route("/users/email/:email").get(userController.findUserByEmail);

//verify user login
router.route("/users/login").post(userController.verifyLogin);

// Route to update password for a user by ID
router.route("/users/:id/password").put(userController.updatePassword);

// Donation Routes

// Route to add a donation for a specific user
router.route("/users/:id/donations").post(userController.addDonation);

// Route to get all donations by user ID
router.route("/users/:id/donations").get(userController.getDonationsByUserId);

// Route to update a donation by ID for a specific user
router
  .route("/users/:id/donations/:donationId")
  .put(userController.updateDonation);

// Route to delete a donation by ID for a specific user
router
  .route("/users/:id/donations/:donationId")
  .delete(userController.deleteDonation);

// Exporting the configured router to be used in other parts of the application
export default router;

