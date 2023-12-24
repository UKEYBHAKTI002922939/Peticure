// Importing the Express framework
import express from "express";
// Importing the DonationController module
import * as donationController from "../controllers/donation-controller.js";

// Creating a new Express router
const router = express.Router();

router
  .route("/")
  .get(donationController.getDonation)
  .post(donationController.createDonation);

export default router;
