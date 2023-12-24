// Importing the Express framework
import express from "express";
//Importing the AbuseController module
import * as abuseController from "../controllers/abuse-controller.js";


// Creating a new Express router
const router = express.Router();

router.route("/")
    .get(abuseController.getReport)
    .post(abuseController.createReport); 



export default router;
