import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for the Foster model
const FosterSchema = new Schema(
  {
    // Unique identifier for the foster
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    // Name of the foster
    name: {
      type: String,
      required: true,
    },
    // Location of the foster (optional)
    location: {
      type: String,
      required: false,
    },
    // Phone number of the foster
    phone: {
      type: Number,
      required: true,
    },
    // Email address of the foster
    email: {
      type: String,
      required: true,
    },
    // Url of Image
    imageUrl: {
      type: String,
      required: true,
    }
  },
  // Disable versioning (adding __v field)
  { versionKey: false }
);

// Create the Foster model using the defined schema
const FosterModel = mongoose.model("Foster", FosterSchema);

// Export the Foster model
export default FosterModel;
