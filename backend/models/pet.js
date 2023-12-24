import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for the Pet model
const PetSchema = new Schema(
  {
    // Unique identifier for the pet
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    // Reference to the shelter where the pet is located
    shelterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shelter",
      required: true,
    },
    // Name of the pet
    name: {
      type: String,
      required: true,
    },
    // URL for the pet's photo (optional)
    photo: {
      type: String,
      required: false,
    },
    // Age of the pet
    age: {
      type: Number,
      required: true,
    },
    // Type of animal (e.g., cat, dog)
    animal: {
      type: String,
      required: true,
    },
    // Breed of the pet
    breed: {
      type: String,
      required: true,
    },
    // Sex of the pet (e.g., male, female)
    sex: {
      type: String,
      required: true,
    },
    // Indicates whether the pet has been adopted
    adopted: {
      type: Boolean,
      required: true,
    },
    story: {
      type: String,
      required: false,

    }
  },
  // Disable versioning (adding __v field)
  { versionKey: false }
);

// Create the Pet model using the defined schema
const PetModel = mongoose.model("Pet", PetSchema);

// Export the Pet model
export default PetModel;
