import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for the User model
const userSchema = new Schema({
  // First name of the user
  fullname: {
    type: String,
    required: [true, "Full name is required"],
    minLength: [4, "Full name should be atleast 4 characters long"],
    maxLength: [30, "Full name should be less than 30 characters"]
},

  // Email address of the user (must be unique)
  email: {
    type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
},
  // Role of the user (e.g., admin, regular user)
  role: {
    type: String,
    required: false,
  },
  isVerified: {
    type: Boolean,
    default : false,
    
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verrifyTokenExpiry:Date,
  // Donation details for the user
  donation: {
    // Unique identifier for the donation
    donationID: {
      type: Number,
      required: false,
    },
    // Amount of the donation
    dontationAmount: {
      type: Number,
      required: false,
    },
  },
});

// Create the User model using the defined schema
const UserModel = mongoose.model("User", userSchema);

// Export the User model
export default UserModel;
  