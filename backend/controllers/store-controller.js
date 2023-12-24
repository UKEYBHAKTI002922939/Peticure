import * as storeServices from "../services/store-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

// function to getting store response and request by id

export const getStoreInventory = async (req, res) => {
  try {
    const inventory = await storeServices.getStore(req.query);
    setResponse(inventory, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};

// function to updating store response and request in try and catch

export const placeOrder = async (req, res) => {
  try {
    const newOrder = { ...req.body };
    const order = await storeServices.createStore(newOrder);
    setResponse(order, res);
  } catch (err) {
    setErrorResponse(err, res);
  }
};
