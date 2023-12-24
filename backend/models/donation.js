import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Represents the schema for a donation in the database.
 * @param {Object} donationSchema - The schema definition for a donation.
 * @param {string} donationSchema.fullName - The full name of the donor.
 * @param {string} donationSchema.email - The email address of the donor.
 * @param {number} donationSchema.donationAmount - The amount of the donation.
 * @param {number} donationSchema.cardNumber - The card number used for the donation.
 * @param {string} donationSchema.billingAddress - The billing address for the donation.
 * @returns {Object} - The DonationModel object representing the donation schema.
 */
const donationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  donationAmount: {
    type: Number,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
});

const DonationModel = mongoose.model("Donation", donationSchema);

export default DonationModel;
