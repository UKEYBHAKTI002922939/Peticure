import Store from "../models/store.js";

// Function to retrieve store(s) based on provided query parameters.
export const getStore = async (params = {}) => {
    // Finding stores in the database that match the given parameters.
    const store = await Store.find(params).exec();

    // Returning the found store(s).
    return store;
};

// Function to create a new store.
export const createStore = async (newStore) => {
    // Creating an instance of Store with the new data.
    const store = new Store(newStore);

    // Saving the new store to the database and returning the result.
    return await store.save();
};
