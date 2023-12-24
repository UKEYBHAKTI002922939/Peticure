import Shelter from '../models/shelter.js';

// Function to retrieve shelters based on provided query parameters.
export const getShelters = async (params = {}) => {
    // Finding shelters in the database that match the given parameters.
    const shelters = await Shelter.find(params).exec();

    // Returning the found shelters.
    return shelters;
}

// Function to create a new shelter.
export const createShelter = async (newShelter) => {
    // Creating an instance of Shelter with the new data.
    const shelters = new Shelter(newShelter);

    // Saving the new shelter to the database and returning the result.
    return await shelters.save();
}

// Function to find a shelter by its ID.
export const findById = async (id) => {
    // Finding a shelter in the database by its ID.
    const shelters = await Shelter.findById(id).exec();

    // Returning the found shelter.
    return shelters;
}

// Function to update a shelter's information.
export const update = async (updatedShelters, id) => {
    // Updating the shelter information in the database by its ID.
    const shelters = await Shelter.findByIdAndUpdate(id, updatedShelters).exec();

    // Returning the updated shelter.
    return shelters;
}

// Function to remove a shelter by its ID.
export const remove = async (id) => {
    // Deleting a shelter from the database by its ID.
    return await Shelter.findByIdAndDelete(id).exec();   
}