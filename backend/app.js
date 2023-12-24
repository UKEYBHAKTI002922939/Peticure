// Importing necessary modules
import cors from 'cors'; // Middleware for enabling CORS
import express from 'express'; // Web framework for Node.js
import registerRouter from './routes/index.js'; // Router setup for routes
import mongoose from 'mongoose'; // MongoDB object modeling tool
import models from './models/index.js'; // Database models
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';

dotenv.config();

// Function to initialize the Express app
const initialize = (app) => {
    // Middleware setup

    // Enable CORS (Cross-Origin Resource Sharing)
    app.use(cors());

    // Parse incoming JSON requests
    app.use(express.json());
    
    //cookie parser
    app.use(cookieParser());

    // Parse incoming URL-encoded requests
    app.use(express.urlencoded({ extended: true }));

    // MongoDB connection establishment

    // Connect to MongoDB Atlas
    mongoose.connect('mongodb+srv://assignment9:Assignment09Group02@petapp.gf2t3et.mongodb.net/petDB?retryWrites=true&w=majority');

    // Initialize routes using the provided app instance
    registerRouter(app);
}

// Exporting the initialize function
export default initialize;
