import Donation from "../models/donation.js";

// Function to retrieve donations based on provided query parameters.
export const getDonations = async (params = {}) => {
  // Finding donations in the database that match the given parameters.
  const donations = await Donation.find(params).exec();

  // Returning the donations.
  return donations;
};

// Function to create a new donation.
export const createDonation = async (newDonation) => {
  // Creating an instance of Donation with the new data.
  const donation = new Donation(newDonation);

  // Saving the new donation to the database and returning the result.
  return await donation.save();
};
