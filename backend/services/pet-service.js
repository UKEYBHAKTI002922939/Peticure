import Pet from '../models/pet.js';


// Function to retrieve pets based on provided query parameters.
export const getPets = async (params = {}) => {
    // Finding pets in the database that match the given parameters.
    const pets = await Pet.find(params).exec();

    // Returning the found pets.
    return pets;
}

// Function to create a new pet.
export const createPet = async (newPet) => {
    // Creating an instance of Pet with the new data.
    const pet = new Pet(newPet);

    // Saving the new pet to the database and returning the result.
    return await pet.save();
}

// Function to find a pet by its ID.
export const findById = async (id) => {
    
    // Finding a pet in the database by its ID.
    const pet = await Pet.findById(id).populate('shelterId').exec();

    // Returning the found pet.
    return pet;
}

// Function to update a pet's information.
export const update = async (updatedPets, id) => {
    // Updating the pet information in the database by its ID.
    const pet = await Pet.findByIdAndUpdate(id, updatedPet).exec();

    // Returning the updated pet.
    return pet;
}

// Function to remove a pet by its ID.
export const remove = async (id) => {
    // Deleting a pet from the database by its ID.
    return await Pet.findByIdAndDelete(id).exec();
}