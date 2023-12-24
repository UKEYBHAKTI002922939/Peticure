import mongoose from "mongoose";

// Define the schema for the PetHealthRecord collection
const petHealthRecordSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet", // Reference to the 'Pet' collection
    required: true,
  },
  visitDate: {
    type: Date,
    required: true,
  },
  veterinarian: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  medications: [
    {
      name: String,
      dosage: String,
    },
  ],
});

// Create a model for the 'PetHealthRecord' collection
const PetHealthRecordModel = mongoose.model(
  "PetHealthRecord",
  petHealthRecordSchema
);

// Export the model for use in other files
export default PetHealthRecordModel;
