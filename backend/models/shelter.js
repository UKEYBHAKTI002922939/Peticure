import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for the Shelter model
const ShelterSchema = new Schema(
  {
    // Unique identifier for the shelter
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    // Name of the shelter
    name: {
      type: String,
      required: true,
    },
    // Location of the shelter (optional)
    location: {
      type: String,
      required: false,
    },
    // Phone number of the shelter
    phone: {
      type: Number,
      required: true,
    },
    // Email address of the shelter
    email: {
      type: String,
      required: true,
    },
    // Url of Image
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    }
  },
  // Disable versioning (adding __v field)
  { versionKey: false }
);

// Create the Shelter model using the defined schema
const ShelterModel = mongoose.model("Shelter", ShelterSchema);

// Export the Shelter model
export default ShelterModel;
