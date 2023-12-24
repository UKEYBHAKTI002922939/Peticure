// Import the express framework
import express from "express";


// Import the initialize function from the app module
import initialize from "./app.js";


// Create an instance of the express application
const app = express();



// Define the port on which the server will listen
const port = 8000;

// Call the initialize function to set up routes and middleware
initialize(app);

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server listening on port ${port}!`));
