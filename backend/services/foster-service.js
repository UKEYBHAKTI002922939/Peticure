import Foster from '../models/foster.js';

// Function to retrieve fosters based on provided query parameters.
export const getFosters = async (params = {}) => {
    // Finding fosters in the database that match the given parameters.
    const fosters = await Foster.find(params).exec();

    // Returning the found fosters.
    return fosters;
}

// Function to create a new foster.
export const createFoster = async (newFoster) => {
    // Creating an instance of Foster with the new data.
    const fosters = new Foster(newFoster);

    // Saving the new foster to the database and returning the result.
    return await fosters.save();
}

// Function to find a foster by its ID.
export const findById = async (id) => {
    // Finding a foster in the database by its ID.
    const fosters = await Foster.findById(id).exec();

    // Returning the found foster.
    return fosters;
}

// Function to update a foster's information.
export const update = async (updatedFosters, id) => {
    // Updating the foster information in the database by its ID.
    const fosters = await Foster.findByIdAndUpdate(id, updatedFosters).exec();

    // Returning the updated foster.
    return fosters;
}

// Function to remove a foster by its ID.
export const remove = async (id) => {
    // Deleting a foster from the database by its ID.
    return await Foster.findByIdAndDelete(id).exec();   
}