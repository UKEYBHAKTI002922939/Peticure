import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Function to retrieve all users from the database.
export const getAllUsers = async () => {
  // Finding all users in the database.
  const users = await User.find({}).exec();

  // Returning the list of users.
  return users;
};

// Function to find a user by their ID.
export const getUserById = async (id) => {
  // Finding a user in the database by their ID.
  const user = await User.findById(id).exec();

  // Returning the found user.
  return user;
};

// Function to create a new user.
export const createUser = async (newUser) => {
  // Creating an instance of User with the new data.
  const user = new User(newUser);
  //encrypt the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
  user.password = hashedPassword;

  // Saving the new user to the database and returning the result.
  return await user.save();

};

// Function to update a user's information.
export const updateUser = async (updatedUser, id) => {
  // Updating the user information in the database by their ID.
  const user = await User.findByIdAndUpdate(id, updatedUser).exec();

  // Returning the updated user.
  return user;
};

// Function to delete a user by their ID.
export const deleteUser = async (id) => {
  // Deleting a user from the database by their ID.
  return await User.findByIdAndDelete(id).exec();
};

// Function to find a user by their email.
export const findByEmail = async (email) => {
  // Finding a user in the database by their email.
  return await User.findOne({ email }).exec();
};

//fuction to Verifylogin
export const verifylogin = async (email, password) => {
  // Find user by email
  const user = await User.findOne({ email }).exec();  

  if (!user) {
    throw new Error("User not found");
  }
  console.log({ ...user });
  console.log("password " + password);
  console.log("users.password " + user.password);


  // Compare password with stored hash
  const isMatch = await bcrypt.compare(password, user.password);
  console.log("match results", isMatch);
  if (!isMatch) {
    throw new Error("Incorrect password");
  }

  //jwt authentication 
  //create token data 
  const tokenData = {
    id: user._id,
    fullname: user.fullname,
    email: user.email
  };
  //create token
  const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

  console.log(`User with email ${email} logged in successfully.`)

  // Login successful, return user object
  return { user, token };

};


// Function to update a user's password.
export const updatePassword = async (user, options) => {
  // Updating the user's password in the database by their ID.
  return await User.findByIdAndUpdate(user.id, user, options).exec();
};

// Function to add a donation to a user's record.
export const addDonation = async (userId, donationData) => {
  // Finding the user by their ID.
  const user = await User.findById(userId).exec();
  if (!user) {
    throw new Error("User not found");
  }

  // Adding the donation data to the user's record.
  user.donation.push(donationData);

  // Saving the updated user record.
  return await user.save();
};

// Function to retrieve donations made by a specific user.
export const getDonationsByUserId = async (userId) => {
  // Finding the user by their ID.
  const user = await User.findById(userId).exec();
  if (!user) {
    throw new Error("User not found");
  }

  // Returning the user's donation data.
  return user.donation;
};

// Function to update a specific donation made by a user.
export const updateDonation = async (userId, donationId, updatedDonation) => {
  // Finding the user by their ID.
  const user = await User.findById(userId).exec();
  if (!user) {
    throw new Error("User not found");
  }

  // Finding the specific donation by its ID.
  const donation = user.donation.id(donationId);
  if (!donation) {
    throw new Error("Donation not found");
  }

  // Updating the donation data.
  donation.set(updatedDonation);

  // Saving the updated user record.
  return await user.save();
};

// Function to delete a specific donation from a user's record.
export const deleteDonation = async (userId, donationId) => {
  // Finding the user by their ID.
  const user = await User.findById(userId).exec();
  if (!user) {
    throw new Error("User not found");
  }

  // Removing the specific donation from the user's record.
  user.donation.id(donationId).remove();

  // Saving the updated user record.
  return await user.save();
};
