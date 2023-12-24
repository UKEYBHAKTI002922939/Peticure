// Importing various routers
import petRouter from "./pet-router.js";
import storeRouter from "./store-router.js";
import shelterRouter from "./shelter-router.js";
import petHealthRecordRouter from "./pet-health-record-router.js";
import userRouter from "./user-router.js";
import fosterRouter from "./foster-router.js";
import abuseRouter from "./abuse-router.js";
import donationRouter from "./donation-router.js";
// Exporting a function that sets up routes in the app
export default (app) => {
  // Setting up routes for different functionalities using corresponding routers

  // Route for pets
  app.use("/pets", petRouter);

  // Route for store-related functionalities
  app.use("/store", storeRouter);

  // Route for shelter-related functionalities
  app.use("/shelter", shelterRouter);

  // Route for pet health record functionalities
  app.use("/health-record", petHealthRecordRouter);

  // Route for user-related functionalities
  app.use("/user", userRouter);

  // Route for foster-related functionalities
  app.use("/foster", fosterRouter);

  // Route for abuse related functionalities
  app.use("/abuse", abuseRouter);

  // Route for donation realated functionalites
  app.use("/donation", donationRouter);
};
