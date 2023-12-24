import * as userService from "../services/user-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";
import cookie from "cookie";


export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    setResponse(users, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = { ...req.body };
    const user = await userService.createUser(newUser);
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = { ...req.body };
    const user = await userService.updateUser(updatedUser, id);
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await userService.deleteUser(id);
    setResponse({}, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const findUserByEmail = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userService.findByEmail(email);
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const verifyLogin = async (req, res) => {

  try {
    const email = req.body.email;
    const password = req.body.password;
    const { user, token } = await userService.verifylogin(email, password);
    //setting cookie response
    res.cookie('accessToken', {
      httpOnly : true
    });
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

//forgot Paasword controller function
export const updatePassword = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = { ...req.body };
    const options = { new: true }; // To return the modified document instead of the original
    const user = await userService.updatePassword(updatedUser, options);
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};
export const addDonation = async (req, res) => {
  try {
    const userId = req.params.id;
    const donationData = { ...req.body };
    const user = await userService.addDonation(userId, donationData);
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const getDonationsByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const donations = await userService.getDonationsByUserId(userId);
    setResponse(donations, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const updateDonation = async (req, res) => {
  try {
    const userId = req.params.id;
    const donationId = req.params.donationId;
    const updatedDonation = { ...req.body };
    const user = await userService.updateDonation(
      userId,
      donationId,
      updatedDonation
    );
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

export const deleteDonation = async (req, res) => {
  try {
    const userId = req.params.id;
    const donationId = req.params.donationId;
    const user = await userService.deleteDonation(userId, donationId);
    setResponse(user, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};
