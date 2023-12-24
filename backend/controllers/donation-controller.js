import { setResponse, setErrorResponse } from "./response-handler.js";
import * as donationService from "../services/donation-service.js";

// Function to get donation response and request
export const getDonation = async (req, res) => {
  try {
    const params = { ...req.query };
    const donations = await donationService.getDonations(params);
    setResponse(donations, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

// Function to create a donation response and request
export const createDonation = async (req, res) => {
  try {
    const newDonation = { ...req.body };
    const donation = await donationService.createDonation(newDonation);
    setResponse(donation, res);
  } catch (err) {
    console.log(err);
    setErrorResponse(err, res);
  }
};
